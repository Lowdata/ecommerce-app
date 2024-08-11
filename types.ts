import { Product } from "./screens/HomeScreen";

export type RootStackParamList = {
    Main: undefined;
    ProductDetails: { product: Product };
};