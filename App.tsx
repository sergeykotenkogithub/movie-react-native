import { StatusBar } from 'expo-status-bar'
import { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'

import { Header } from '@/components/Header'

import Navigation from '@/navigation/Navigation'

export default function App() {
	return (
		<>
			<SafeAreaProvider>
				<Navigation />
			</SafeAreaProvider>
			<StatusBar style='light' />
		</>
	)
}
