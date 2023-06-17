import { StyleSheet, Text, View, Dimensions, Image, FlatList, TextInput, ScrollView, Pressable, } from 'react-native'
import React from 'react'
import HomeScreenController from '../controller/HomeScreen.controller'

const { width } = Dimensions.get('window');
const itemWidth = width / 2 - 40;
import { useAppCart } from '../../../store/app';
import { addCommasToNumber } from '../../../utils/convertToAmount'

interface Item {
    item: {
        id: string
        productName: string
        description: string
        unitPrice: string
        category: string,
        imageUrl: string
    }
}

const HomeScreen = () => {
    const CartData = useAppCart()
    const {
        filteredItems,
        ProductCategory,
        searchProductName,
        setSearchProductName,
        gotoCartScreen,
        addItemToCart,
        isAscSortByPrice,
        setSortByPrice,
        selectedCategories,
        toggleCategory
    } = HomeScreenController()

    const renderItem = ({ item }: Item) => (
        <View style={styles.itemContainer}>
            <Image source={{ uri: item.imageUrl }} style={styles.itemImage} />
            <Text style={styles.productlbl}>{item.productName}</Text>
            <Text style={styles.categoryLbl}>{item.category.toUpperCase()}</Text>
            <Text style={styles.unitPriceLbl}>{addCommasToNumber(Number(item.unitPrice))}</Text>
            <Pressable
                onPress={() => addItemToCart(item)}
                style={styles.cartBtn}>
                <Text style={styles.cartBtnLbl}>Add to cart</Text>
            </Pressable>
        </View>
    );

    return (
        <View style={styles.container}>
            <View style={styles.viewCart}>
                <View>
                    <Text style={styles.greetings}>Good Day, Jette</Text>
                </View>
                <Pressable
                    style={styles.cartBtn}
                    onPress={gotoCartScreen}
                >
                    <Text>View cart : {CartData.length}</Text>
                </Pressable>
            </View>
            <View>
                <TextInput
                    value={searchProductName}
                    style={styles.searchInput}
                    placeholder='Search product'
                    onChangeText={(text) => setSearchProductName(text)}
                />
            </View>
            {/* categories */}
            <View>
                <Text style={{ fontWeight: 'bold', marginVertical: 10 }}>Categories</Text>
                <ScrollView
                    horizontal
                >
                    {ProductCategory.map((cat: string, index) => {
                        const selected = selectedCategories.includes(cat)
                        return (
                            <Pressable
                                onPress={() => toggleCategory(cat)}
                                key={index}
                                style={[styles.categorySelection, { backgroundColor: selected ? 'maroon' : '#E8E8E8' }]}>
                                <Text style={{ color: selected ? '#ffff' : 'gray' }}>{cat}</Text>
                            </Pressable>
                        )
                    })}
                </ScrollView>
            </View>

            <Pressable style={styles.priceFilter}>
                <Text style={{
                    fontWeight: 'bold'
                }}>Filter by Price</Text>
                <Pressable
                    onPress={() => setSortByPrice(!isAscSortByPrice)}
                    style={styles.priceFilterCta}>
                    <Text style={{ color: '#ffff' }}>{isAscSortByPrice ? 'Ascending' : 'Descending'}</Text>
                </Pressable>
            </Pressable>

            <View>
                <FlatList
                    contentContainerStyle={styles.listContent}
                    data={filteredItems}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id.toString()}
                    numColumns={2}
                />
            </View>

        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        backgroundColor: '#ffff'
    },
    greetings: {
        fontWeight: 'bold',
        fontSize: 20
    },
    viewCart: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    categorySelection: {
        margin: 5,
        padding: 10,
        borderRadius: 10
    },
    searchInput: {
        borderRadius: 5,
        backgroundColor: '#E8E8E8'
    },
    itemContainer: {
        width: itemWidth,
        padding: 10,
        margin: 10,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
    },
    itemImage: {
        width: '100%',
        height: 100,
        resizeMode: 'cover',
    },
    listContent: {
        paddingBottom: 200, // Adjust the value as needed
    },
    productlbl: {
        fontWeight: '800',
        fontSize: 16
    },
    categoryLbl: {
        fontSize: 12
    },
    unitPriceLbl: {
        fontWeight: 'bold',
        color: '#07C61A'
    },
    cartBtn: {
        backgroundColor: 'orange',
        padding: 5,
        marginVertical: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    cartBtnLbl: {
        color: '#ffff'
    },
    priceFilter: {
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    priceFilterCta: {
        backgroundColor: 'orange',
        padding: 5,
        borderRadius: 5
    }
})