import { View, Text, FlatList, Image } from 'react-native';
import { useEffect, useState } from 'react';
// Assurez-vous d'importer votre config Firebase
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../services/firebaseConfig';
import { Video } from 'expo-av';

export default function CourseScreen() {
  const [courses, setCourses] = useState<any[]>([]);

  useEffect(() => {
    const fetchCourses = async () => {
      const querySnapshot = await getDocs(collection(db, "courses"));
      const coursesList = querySnapshot.docs.map(doc => doc.data());
      setCourses(coursesList);
    };

    fetchCourses();
  }, []);

  return (
    <View>
      <FlatList
        data={courses}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View>
            <Text>{item.title}</Text>
            <Text>{item.description}</Text>
            <Text>{`Chapitres: ${item.chapterCount}`}</Text>
            {item.image && <Image source={{ uri: item.image }} style={{ width: 100, height: 100 }} />}
            {item.video && <Video source={{ uri: item.video }} style={{ width: 200, height: 200 }} />}
          </View>
        )}
      />
    </View>
  );
}
