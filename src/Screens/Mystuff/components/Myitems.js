import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  SafeAreaView,
  FlatList,
  ActivityIndicator,
  Alert,
} from 'react-native';
import React, {useContext, useEffect, useState, useCallback} from 'react';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';

import {Dimensions} from 'react-native';
import {Searchbar} from 'react-native-paper';
import {useSelector, useDispatch} from 'react-redux';
import {getAllProduct} from '../../../redux/actions/GetAllpro.action';

const ScreenWidth = Dimensions.get('window').width;

const Myitems = ({navigation}) => {
  const [search, setSearch] = useState('');
  const [gridView, setGridView] = useState(true);
  const [product, setProduct] = useState([]);

  // const [isloading, setIsloading] = useState(false);
  const [number, setNumber] = useState(1);
  // const selector = useSelector();
  const dispatch = useDispatch();
  const {login_response} = useSelector(state => state.Sign_In_Reducer);
  const {all_Product} = useSelector(state => state.getAllProductReducer);

  const loginData = login_response ? login_response.token : [];
  console.log('loginData', loginData);

  useEffect(() => {
    dispatch(getAllProduct(loginData));
    setProduct(all_Product?.items);
  }, []);

  console.log('all_Product asdasd', all_Product?.items);

  const newSearchArray = product.filter(items => {
    const itemToUpperCase = items.tags.toUpperCase();
    const searchValueToUpperCase = search.toUpperCase();
    return itemToUpperCase.includes(searchValueToUpperCase);
  });

  // console.log('productDetail', productDetail);

  // const asyncData = AsyncStorage.getItem('userToken');
  const renderItem = useCallback(({item}) => {
    return (
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('ProductDetail', {
            id: item?.id,
          })
        }
        style={{
          flex: 1,
          margin: 5,
          borderWidth: 1,
          alignItems: 'center',
          height: 230,
        }}>
        {/* <Text style={{color: 'black', paddingVertical: 5}}>{item.addedBy}</Text> */}
        <Image
          source={{
            uri: item.mediaURL,
          }}
          style={{resizeMode: 'contain', width: '100%', height: '50%'}}
        />
        <Text
          numberOfLines={1}
          style={{
            color: 'black',
            fontWeight: 'bold',
            fontSize: 15,
            paddingVertical: 5,
            backgroundColor: '#2CCBB5',
            width: '100%',
            textAlign: 'center',
          }}>
          {item?.name}
        </Text>
        <View
          style={{
            // backgroundColor: 'orange',
            width: '95%',
            marginTop: 5,
            height: 30,
            marginBottom: 5,
            borderRadius: 4,
          }}>
          <Text
            style={{
              color: 'black',
              textAlign: 'center',
              padding: 5,
              fontWeight: 'bold',
              fontSize: 16,
            }}>
            ₹ 100 {item?.unit_Price}
          </Text>
        </View>
        <TouchableOpacity
          onPress={() => {
            if (additem.some(data => data.id == item.id)) {
              Alert.alert('items already added!');
            } else {
              setAdditem([...additem, item]);
              Alert.alert('Successfull y added!');
            }
            setNumber(number + 1);
          }}
          style={{
            backgroundColor: 'green',
            width: '95%',
            marginTop: 5,
            height: 30,
            marginBottom: 5,
            borderRadius: 4,
          }}>
          <View>
            <Text style={{color: 'white', textAlign: 'center', padding: 5}}>
              Add Cart
            </Text>
          </View>
        </TouchableOpacity>
        <View style={{backgroundColor: 'blue'}}></View>
      </TouchableOpacity>
    );
  });
  return (
    <SafeAreaView style={styles.container}>
      <View style={{flexDirection: 'row', marginLeft: 20}}>
        <TouchableOpacity
          onPress={() => setGridView(false)}
          style={{flexDirection: 'row', marginLeft: 20}}>
          <Icons name="view-list" color="black" size={35} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setGridView(true)}
          style={{flexDirection: 'row', marginLeft: 20}}>
          <Icons
            name="view-grid"
            color="black"
            size={30}
            style={{marginTop: 3, marginLeft: 20}}
          />
        </TouchableOpacity>
        <Searchbar
          style={styles.searchBar}
          placeholder="Search"
          onChangeText={value => setSearch(value)}
        />
      </View>
      {/* {isloading ? (
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: '50%',
          }}>
          <ActivityIndicator size="large" />
        </View>
      ) : ( */}
      <FlatList
        data={newSearchArray}
        // data={data}
        renderItem={renderItem}
        numColumns={gridView ? 2 : 1}
        horizontal={false}
        key={gridView}
      />
      {/* )} */}
    </SafeAreaView>
  );
};
export default Myitems;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 5,
  },
  item: {
    width: (ScreenWidth - 40) / 2 - 10,
    backgroundColor: '#fff',
    padding: 10,
    marginVertical: 10,
    marginHorizontal: 10,
    borderWidth: 1,
    borderRadius: 5,
  },
  searchBar: {
    marginLeft: 55,
    marginRight: 20,

    borderRadius: 5,
    width: '80%',
    backgroundColor: 'white',
  },
});
// <FlatList data={items} renderItem={renderItem} keyExtractor={item => item.id}/>
