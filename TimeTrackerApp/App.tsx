import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  StatusBar as RNStatusBar,
  Dimensions,
  Alert,
  Linking
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Ionicons } from '@expo/vector-icons';
import activityData from './src/data/activities.json';
import { useTimer } from './src/hooks/useTimer';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { RiskFormView } from './src/components/RiskFormView';
import { FORM_HTML } from './src/constants/formHtml';

const { width } = Dimensions.get('window');

type Activity = {
  name: string;
  planned_start: string;
  planned_end: string;
  planned_duration_str: string;
  planned_duration_sec: number;
};

type ModulesData = {
  [key: string]: Activity[];
};

export default function App() {
  const [currentView, setCurrentView] = useState<'tracker' | 'form'>('tracker');
  const [activeModule, setActiveModule] = useState<string>("Módulo I");
  const [selectedActivity, setSelectedActivity] = useState<Activity | null>(null);
  const [sessionResults, setSessionResults] = useState<{ [key: string]: { actual: number, variance: number } }>({});

  const { seconds, isActive, start, pause, reset, formattedTime, formatTime } = useTimer();

  // ... (keeping existing effects)
  useEffect(() => {
    const loadResults = async () => {
      try {
        const saved = await AsyncStorage.getItem('@session_results');
        if (saved) setSessionResults(JSON.parse(saved));
      } catch (e) {
        console.error("Failed to load results", e);
      }
    };
    loadResults();
  }, []);

  useEffect(() => {
    const saveResults = async () => {
      try {
        await AsyncStorage.setItem('@session_results', JSON.stringify(sessionResults));
      } catch (e) {
        console.error("Failed to save results", e);
      }
    };
    if (Object.keys(sessionResults).length > 0) saveResults();
  }, [sessionResults]);

  const modules = Object.keys(activityData);
  const activities = (activityData as ModulesData)[activeModule] || [];

  const handleStop = () => {
    if (!selectedActivity) return;

    const variance = seconds - selectedActivity.planned_duration_sec;
    const activityKey = `${activeModule}-${selectedActivity.name}`;

    setSessionResults(prev => ({
      ...prev,
      [activityKey]: {
        actual: seconds,
        variance: variance
      }
    }));

    Alert.alert(
      "Sessão Finalizada",
      `Tempo Real: ${formattedTime}\nPlanejado: ${selectedActivity.planned_duration_str}\nVariância: ${formatTime(Math.abs(variance))} (${variance > 0 ? '+' : '-'})`,
      [{
        text: "OK", onPress: () => {
          reset();
          setSelectedActivity(null);
        }
      }]
    );
  };

  const getVarianceColor = (variance: number) => {
    if (variance <= 0) return '#4ADE80'; // Emerald 400
    if (variance < 60) return '#FACC15'; // Yellow 400
    return '#EF4444'; // Red 500
  };

  if (currentView === 'form') {
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar style="dark" />
        <View style={styles.formHeader}>
          <TouchableOpacity onPress={() => setCurrentView('tracker')} style={styles.backBtn}>
            <Ionicons name="arrow-back" size={24} color="#1A3A34" />
            <Text style={styles.backBtnText}>Voltar ao Trainer</Text>
          </TouchableOpacity>
        </View>
        <RiskFormView html={FORM_HTML} />
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" />
      <RNStatusBar barStyle="light-content" />

      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <View>
            <Text style={styles.headerTitle}>ARAON</Text>
            <Text style={styles.headerSubtitle}>Avaliação de Risco Arbóreo Online</Text>
          </View>
          <View style={styles.authorBadge}>
            <Text style={styles.authorLabel}>AUTOR</Text>
            <Text style={styles.authorName}>Rafael Ammon</Text>
          </View>
        </View>
        <View style={styles.headerActions}>
          <TouchableOpacity
            style={styles.contactBtn}
            onPress={() => Linking.openURL('https://rfammon.github.io/StRafaelAmmon/')}
          >
            <Ionicons name="mail-outline" size={20} color="#4ADE80" />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.openFormBtn}
            onPress={() => setCurrentView('form')}
          >
            <Ionicons name="clipboard-outline" size={24} color="#4ADE80" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.profileBtn}>
            <Ionicons name="person-circle-outline" size={32} color="#4ADE80" />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.moduleTabs}>
        {modules.map(mod => (
          <TouchableOpacity
            key={mod}
            style={[styles.tab, activeModule === mod && styles.activeTab]}
            onPress={() => {
              setActiveModule(mod);
              setSelectedActivity(null);
              reset();
            }}
          >
            <Text style={[styles.tabText, activeModule === mod && styles.activeTabText]}>
              {mod.replace("Módulo ", "Mod ")}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <ScrollView style={styles.content} contentContainerStyle={{ paddingBottom: 150 }}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>{activeModule} - Cronograma</Text>
          <View style={styles.badge}>
            <Text style={styles.badgeText}>{activities.length} Atividades</Text>
          </View>
        </View>

        {activities.map((item, index) => {
          const activityKey = `${activeModule}-${item.name}`;
          const result = sessionResults[activityKey];

          return (
            <TouchableOpacity
              key={index}
              style={[styles.activityCard, selectedActivity?.name === item.name && styles.selectedCard]}
              onPress={() => {
                if (!isActive) {
                  setSelectedActivity(item);
                  reset();
                } else {
                  Alert.alert("Timer Ativo", "Finalize a atividade atual primeiro.");
                }
              }}
            >
              <View style={styles.activityInfo}>
                <Text style={styles.activityName}>{item.name}</Text>
                <View style={styles.timeRow}>
                  <Ionicons name="time-outline" size={14} color="#94A3B8" />
                  <Text style={styles.timeText}>Meta: {item.planned_duration_str}</Text>
                </View>
              </View>

              <View style={styles.statusSection}>
                {result ? (
                  <View style={styles.resultBadge}>
                    <Text style={[styles.varianceText, { color: getVarianceColor(result.variance) }]}>
                      {result.variance > 0 ? '+' : ''}{formatTime(result.variance).replace("00:", "")}
                    </Text>
                    <Ionicons name="checkmark-circle" size={24} color="#4ADE80" />
                  </View>
                ) : (
                  <Ionicons name="play-circle-outline" size={28} color="#334155" />
                )}
              </View>
            </TouchableOpacity>
          );
        })}
      </ScrollView>

      {selectedActivity && (
        <View style={styles.timerOverlay}>
          <View style={styles.timerCard}>
            <View style={styles.timerHeader}>
              <Text style={styles.timerTitle} numberOfLines={1}>{selectedActivity.name}</Text>
              <Text style={styles.plannedLabel}>Planejado: {selectedActivity.planned_duration_str}</Text>
            </View>

            <View style={styles.timerDisplay}>
              <Text style={[styles.timerValue, isActive && { color: '#4ADE80' }]}>{formattedTime}</Text>
              <View style={styles.progressContainer}>
                <View style={[
                  styles.progressBar,
                  { width: `${Math.min(100, (seconds / (selectedActivity?.planned_duration_sec || 1)) * 100)}%` as any },
                  seconds > (selectedActivity?.planned_duration_sec || 0) && { backgroundColor: '#EF4444' }
                ]} />
              </View>
            </View>

            <View style={styles.controls}>
              {!isActive ? (
                <TouchableOpacity style={styles.playBtn} onPress={start}>
                  <Ionicons name="play" size={32} color="#0F172A" />
                  <Text style={styles.playBtnText}>COMEÇAR</Text>
                </TouchableOpacity>
              ) : (
                <>
                  <TouchableOpacity style={[styles.controlBtn, styles.pauseBtn]} onPress={pause}>
                    <Ionicons name="pause" size={28} color="#fff" />
                  </TouchableOpacity>
                  <TouchableOpacity style={[styles.controlBtn, styles.stopBtn]} onPress={handleStop}>
                    <Ionicons name="stop" size={28} color="#fff" />
                  </TouchableOpacity>
                </>
              )}
            </View>

            {isActive && (
              <TouchableOpacity style={styles.cancelLink} onPress={() => {
                Alert.alert("Cancelar", "Deseja cancelar esta sessão?", [
                  { text: "Não" },
                  { text: "Sim", onPress: () => { reset(); setSelectedActivity(null); } }
                ]);
              }}>
                <Text style={styles.cancelText}>CANCELAR</Text>
              </TouchableOpacity>
            )}
          </View>
        </View>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0F172A',
  },
  header: {
    padding: 24,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  authorBadge: {
    backgroundColor: '#1E293B',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#334155',
  },
  authorLabel: {
    color: '#94A3B8',
    fontSize: 8,
    fontWeight: '800',
    letterSpacing: 1,
    lineHeight: 10,
  },
  authorName: {
    color: '#F8FAFC',
    fontSize: 10,
    fontWeight: '700',
    lineHeight: 12,
  },
  headerActions: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  contactBtn: {
    width: 40,
    height: 40,
    borderRadius: 12,
    backgroundColor: '#1E293B',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#334155',
  },
  openFormBtn: {
    width: 44,
    height: 44,
    borderRadius: 12,
    backgroundColor: '#1E293B',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#334155',
  },
  headerTitle: {
    fontSize: 32,
    fontWeight: '900',
    color: '#F8FAFC',
    letterSpacing: -1.5,
  },
  headerSubtitle: {
    fontSize: 14,
    color: '#4ADE80',
    fontWeight: '600',
    letterSpacing: 1,
    textTransform: 'uppercase',
  },
  profileBtn: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#1E293B',
    alignItems: 'center',
    justifyContent: 'center',
  },
  moduleTabs: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    marginBottom: 24,
  },
  tab: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 12,
    backgroundColor: '#1E293B',
    marginRight: 10,
    borderWidth: 1.5,
    borderColor: '#334155',
  },
  activeTab: {
    backgroundColor: '#4ADE80',
    borderColor: '#4ADE80',
  },
  tabText: {
    color: '#94A3B8',
    fontWeight: '700',
    fontSize: 14,
  },
  activeTabText: {
    color: '#0F172A',
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
    justifyContent: 'space-between',
  },
  sectionTitle: {
    color: '#F8FAFC',
    fontSize: 20,
    fontWeight: '800',
  },
  badge: {
    backgroundColor: '#334155',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 8,
  },
  badgeText: {
    color: '#94A3B8',
    fontSize: 12,
    fontWeight: '700',
  },
  activityCard: {
    backgroundColor: '#1E293B',
    borderRadius: 20,
    padding: 20,
    marginBottom: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: '#334155',
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
  },
  selectedCard: {
    borderColor: '#4ADE80',
    backgroundColor: '#0F172A',
  },
  activityInfo: {
    flex: 1,
  },
  activityName: {
    color: '#F8FAFC',
    fontSize: 17,
    fontWeight: '700',
    marginBottom: 6,
  },
  timeRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  timeText: {
    color: '#94A3B8',
    fontSize: 13,
    marginLeft: 6,
    fontWeight: '500',
  },
  statusSection: {
    marginLeft: 15,
  },
  resultBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  varianceText: {
    fontSize: 12,
    fontWeight: '800',
  },
  timerOverlay: {
    position: 'absolute',
    bottom: 0,
    width: width,
    padding: 24,
    backgroundColor: 'rgba(15, 23, 42, 0.95)',
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
  },
  timerCard: {
    backgroundColor: '#1E293B',
    borderRadius: 28,
    padding: 28,
    borderWidth: 1,
    borderColor: '#334155',
  },
  timerHeader: {
    alignItems: 'center',
    marginBottom: 24,
  },
  timerTitle: {
    color: '#F8FAFC',
    fontSize: 22,
    fontWeight: '800',
    textAlign: 'center',
  },
  plannedLabel: {
    color: '#4ADE80',
    fontSize: 14,
    fontWeight: '700',
    marginTop: 6,
    letterSpacing: 0.5,
  },
  timerDisplay: {
    marginBottom: 32,
    alignItems: 'center',
  },
  timerValue: {
    fontSize: 64,
    fontVariant: ['tabular-nums'],
    fontWeight: '900',
    color: '#94A3B8',
    letterSpacing: -2,
  },
  progressContainer: {
    height: 6,
    width: '100%',
    backgroundColor: '#334155',
    borderRadius: 3,
    marginTop: 16,
    overflow: 'hidden',
  },
  progressBar: {
    height: '100%',
    backgroundColor: '#4ADE80',
  },
  controls: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 20,
  },
  playBtn: {
    backgroundColor: '#4ADE80',
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 18,
    paddingHorizontal: 32,
    borderRadius: 20,
    gap: 12,
    width: '100%',
    justifyContent: 'center',
  },
  playBtnText: {
    fontSize: 18,
    fontWeight: '900',
    color: '#0F172A',
    letterSpacing: 1,
  },
  controlBtn: {
    width: 64,
    height: 64,
    borderRadius: 22,
    alignItems: 'center',
    justifyContent: 'center',
  },
  pauseBtn: {
    backgroundColor: '#334155',
  },
  stopBtn: {
    backgroundColor: '#EF4444',
  },
  formHeader: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB',
    backgroundColor: '#FFF',
  },
  backBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  backBtnText: {
    color: '#1A3A34',
    fontWeight: '700',
    fontSize: 16,
  },
  cancelLink: {
    marginTop: 20,
    alignItems: 'center',
  },
  cancelText: {
    color: '#64748B',
    fontSize: 12,
    fontWeight: '700',
    letterSpacing: 1.5,
  }
});
