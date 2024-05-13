import { Link } from "expo-router";
import { useState } from "react";
import { ScrollView, Text, View, Image, TextInput } from "react-native";

export default function Index() {
  const [text, setText] = useState('');

  return (

    <ScrollView>
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Hello world</Text>
      <Text>This is our second text component</Text>
    </View>
      <View>
        <Link replace href={'/home'}>
    <Image
      source={{
            uri: 'https://reactnative.dev/docs/assets/p_cat2.png',
          }}
          style={{width: 200, height: 200}}
          />
          </Link>
      </View>
      <View style={{ padding: 10 }}>
        <TextInput
        style={{height: 40}}
        placeholder="Type here!"
        onChangeText={newText => setText(newText)}
        defaultValue={text}
        />
        <Text style={{ padding: 10, fontSize: 42 }}>
          {text}
        </Text>
      </View>
      </ScrollView>
  );
}
