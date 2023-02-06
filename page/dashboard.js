import React, { useState } from 'react';
import {
  SafeAreaView,
  View,
  StatusBar,
  Text,
  TextInput,
  FlatList,
  Dimensions,
  StyleSheet,
  Image,
  Pressable,
  ScrollView,
  TouchableOpacity
} from 'react-native';
import COLORS from '../page/COLORS';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons';
const { width } = Dimensions.get('screen');
import Mobil from './mobil';
import { SearchBar } from 'react-native-screens';


const Dashboard = ({ navigation }) => {
  const [typeSearch, setTypeSearch] = useState('id')
  const [initialCar, setInititalCar] = useState(false)
  const [filteredCar, setFilteredCar] = useState(true)


  const optionsList = [
    {
      type: 'Tesla',
      img: require('../assets/tesla.png'),
    },
    {
      type: 'Audi',
      img: require('../assets/audi.png')
    },
    {
      type: 'BMW',
      img: require('../assets/bmw.png')
    },
    {
      type: 'Mazda',
      img: require('../assets/mazda.png')
    }
  ];


  const FlatlistSort = () => {
    const [sortBy, setSortBy] = useState('asc');
    const [filterBy, setFilterBy] = useState('all');
    const [filteredData, setFilteredData] = useState(Mobil);
    const [searchTerm, setSearchTerm] = useState('');


    const filterData = (filter) => {
      setFilterBy(filter);
      if (filter === 'all') {
        setFilteredData(Mobil);
      } else {
        setFilteredData(Mobil.filter((item) => item.type === filter));
      }
    };

    const handleSearch = (text) => {
      setSearchTerm(text);
      const filtered = Mobil.filter((item) => item.title.toLowerCase().includes(text.toLowerCase()));
      setFilteredData(filtered);
    };

    return (
      <View>
        {/* Type Car */}
        {/* Input and sort button container */}
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingHorizontal: 20,
          }}>
          <View style={style.searchInputContainer}>
            <Icon name="search" color={COLORS.grey} size={25} />
            {/* <TextInput placeholder="Search Car" /> */}
            <TextInput placeholder="Search Car                               " onChangeText={handleSearch} value={searchTerm} />
          </View>
          <View style={style.sortBtn}>
            <Pressable onPress={() => filterData('all')}>
              <Icon name="tune" color={COLORS.white} size={25} />
            </Pressable>
          </View>
        </View>
        <ScrollView>
          {/* Header container */}
          <View style={style.header}>
            <View>
              <Text style={{ color: COLORS.dark, fontSize: 30, fontWeight: 'bold' }}>
                Find Car
              </Text>
            </View>
          </View>
          <View style={{ flex: 1 }}>
            <Pressable>
              <View>
                {/* <ListOptions item={optionsList}/> */}

                <View style={{ flex: 1 }}>
                  <Pressable>
                    <View style={style.optionListsContainer}>
                      <FlatList
                        data={optionsList}
                        keyExtractor={item => item.type.toString()}
                        horizontal
                        snapToInterval={width - 20}
                        showsHorizontalScrollIndicator={false}
                        contentContainerStyle={{
                          paddingLeft: 20,
                          paddingVertical: 20,
                        }}
                        renderItem={({ item }) => (
                          <Pressable onPress={() => filterData(item.type)}>
                            <View style={style.optionsCard}>
                              <Image source={item.img} style={style.optionsCardImage} />
                            </View>
                          </Pressable>
                        )}
                      />
                    </View>
                  </Pressable>
                  <View>
                    <Text style={{ color: COLORS.dark, fontSize: 25, fontWeight: 'bold', paddingLeft: 20, paddingTop: 10, }}>
                      Choose a car
                    </Text>
                  </View>

                  {/* Car Card */}
                  <View style={{ flex: 1 }}>
                    <FlatList
                      snapToInterval={width - 20}
                      showsHorizontalScrollIndicator={false}
                      contentContainerStyle={{
                        paddingLeft: 20,
                        paddingVertical: 20,
                      }}
                      horizontal={false}
                      data={filteredData}
                      searchValue=''
                      renderItem={({ item }) =>
                        <Card cars={item} />}
                      keyExtractor={item => item.id.toString()}
                    />
                  </View>

                </View>
              </View>
            </Pressable>
          </View>

        </ScrollView>
      </View>
    );
  };



  const ListOptions = ({ optionsList }) => {
    return (
      <FlatList
        numColumns={4}
        data={optionsList}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <Pressable>
            <View style={style.optionListsContainer}>
              <View style={style.optionsCard}>
                <Image source={item.img} style={style.optionsCardImage} />
                <Text style={{ marginTop: 10, fontSize: 18, fontWeight: 'bold' }}>
                  {item.title}
                </Text>
              </View>
            </View>
          </Pressable>
        )}
      />
    );
  };

  const Card = ({ cars }) => {
    return (
      <Pressable
        activeOpacity={0.8}
        onPress={() => navigation.navigate('DetailMobil', cars)}>
        <View style={style.card}>
          {/* Cars image */}
          <Image source={cars.image} style={style.cardImage} />
          <View style={{ marginTop: 10, }}>
            {/* Title and price container */}
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginTop: 10,
              }}>
              <Text style={{ fontSize: 16, fontWeight: 'bold' }}>
                {cars.title}
              </Text>
              <Text
                style={{ fontWeight: 'bold', color: COLORS.blue, fontSize: 16 }}>
                {cars.price}
              </Text>
            </View>

            {/* description text */}

            <Text style={{ color: COLORS.grey, fontSize: 14, marginTop: 5 }}>
              {cars.description}
            </Text>
            {/* Facilities container */}
            <View style={{ marginTop: 10, flexDirection: 'row' }}>
            </View>
          </View>
        </View>
      </Pressable>
    );
  };

  return (
    <SafeAreaView style={{ backgroundColor: COLORS.white, flex: 1 }}>
      {/* Customise status bar */}
      <StatusBar
        translucent={false}
        backgroundColor={COLORS.white}
        barStyle="dark-content"
      />
      <FlatlistSort />
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  header: {
    paddingVertical: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  searchInputContainer: {
    height: 50,
    backgroundColor: COLORS.light,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    borderRadius: 12,
  },
  sortBtn: {
    backgroundColor: COLORS.dark,
    height: 50,
    width: 50,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
  },
  optionsCard: {
    flex: 1,
    height: 200,
    width: width / 2 - 30,
    elevation: 20,
    alignItems: 'center',
    backgroundColor: COLORS.white,
    borderRadius: 20,
    paddingTop: 10,
    paddingHorizontal: 10,
    marginRight: 15,
    marginBottom: 20,
  },
  optionsCardImage: {
    height: 140,
    borderRadius: 10,
    width: '100%',
  },
  optionListsContainer: {
    flex: 1,
    flexDirection: 'row',
    width: "100%",
    justifyContent: 'space-between',
    marginTop: 20,
    paddingHorizontal: 20,
    marginBottom: 10,
  },
  categoryListText: {
    fontSize: 16,
    fontWeight: 'bold',
    paddingBottom: 5,
    color: COLORS.grey,
  },
  activeCategoryListText: {
    color: COLORS.dark,
    borderBottomWidth: 1,
    paddingBottom: 5,
  },
  categoryListContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 40,
    paddingHorizontal: 40,
  },
  card: {
    height: 250,
    backgroundColor: COLORS.white,
    elevation: 10,
    width: width - 40,
    marginRight: 20,
    marginBottom: 40,
    padding: 15,
    borderRadius: 20,
  },
  cardImage: {
    width: '100%',
    height: 120,
    borderRadius: 15,
  },
  facility: { flexDirection: 'row', marginRight: 15 },
  facilityText: { marginLeft: 5, color: COLORS.grey },
});
export default Dashboard;