import { Link } from "expo-router";
import { Button, Pressable, Text, View } from "react-native";

export default function home({navigation}:{navigation:any}) {
    return (
        <View>
            <Text>Home page</Text>
            <Link replace href='/' asChild>
                <Pressable >
                    <Text>Back to index</Text>
                </Pressable>
            </Link>
            </View>
    )
}