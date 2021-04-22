import React from 'react';
import {View, Text, StyleSheet, Image, ScrollView} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
const data = [
  {
    id: 1,
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4GCtZMzmnVwuqdgNzniwrRQhYuPHXziD8TQ&usqp=CAU',
    name: 'Doge',
    gender: 'male',
    distance: '14m away',
    posted: '10 min ago',
    traits: 'playful',
  },
  {
    id: 2,
    image:
      'https://i.guim.co.uk/img/media/03734ee186eba543fb3d0e35db2a90a14a5d79e3/0_173_5200_3120/master/5200.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=9c30ed97ea8731f3e2a155467201afe3',
    name: 'Parkison',
    gender: 'female',
    distance: '500m away',
    posted: '30 min ago',
    traits: 'playful',
  },
  {
    id: 3,
    image:
      'https://robbreport.com/wp-content/uploads/2020/10/The-Barkers-Pet-Trench-Coat.jpg?w=1000',
    name: 'Bosco',
    gender: 'male',
    distance: '500m away',
    posted: '30 min ago',
    traits: 'playful',
  },
  {
    id: 4,
    image:
      'https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/article_thumbnails/other/cat_relaxing_on_patio_other/1800x1200_cat_relaxing_on_patio_other.jpg?resize=750px',
    name: 'Ginger',
    gender: 'male',
    distance: '500m away',
    posted: '30 min ago',
    traits: 'playful',
  },
  {
    id: 5,
    image:
      'https://www.marinij.com/wp-content/uploads/2020/01/MIJ-L-TAILS-0107.jpg?w=350',
    name: 'Noicy',
    gender: 'female',
    distance: '500m away',
    posted: '30 min ago',
    traits: 'playful',
  },
];
const Pet = props => {
  const {pet} = props;
  return (
    <View style={styles.pet}>
      <Image source={{uri: pet.image}} style={styles.image} />
      <View
        style={{
          flex: 1,
          justifyContent: 'space-between',
          flexDirection: 'row',
          padding: 10,
        }}>
        <View
          style={{
            justifyContent: 'space-between',
            marginLeft: 10,
          }}>
          <Text style={styles.name}>{pet.name}</Text>
          <Text style={styles.meta}>{pet.traits}</Text>
          <Text style={styles.meta}>
            <AntDesign name={'enviroment'} size={10} color={'red'} />{' '}
            {pet.distance}
          </Text>
        </View>
        <View
          style={{
            justifyContent: 'space-between',
          }}>
          <Text style={pet.gender == 'male' ? styles.male : styles.female}>
            {pet.gender.toUpperCase()}
          </Text>
          <Text style={styles.meta}>{pet.posted}</Text>
        </View>
      </View>
    </View>
  );
};
export const HomeScreen = props => {
  return (
    <ScrollView>
      {data.map(pet => {
        return <Pet pet={pet} key={pet.id} />;
      })}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  pet: {
    borderRadius: 10,
    padding: 10,
    backgroundColor: 'white',
    flexDirection: 'row',
    overflow: 'hidden',
    margin: 10,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
  meta: {
    fontSize: 12,
    color: '#969FAE',
  },
  name: {
    fontSize: 14,
    color: '#213152',
    fontWeight: '600',
  },
  male: {
    fontSize: 10,
    color: '#5281DE',
    backgroundColor: '#E6F3FF',
    textAlign: 'center',
    padding: 4,
    borderRadius: 20,
  },
  female: {
    fontSize: 10,
    color: '#EFA7AE',
    backgroundColor: '#FFEFEF',
    textAlign: 'center',
    padding: 4,
    borderRadius: 20,
  },
});
