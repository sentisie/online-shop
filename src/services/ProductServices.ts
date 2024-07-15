import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IProduct } from "../types/types";
import { buildUrl } from "../utils/buildUrl";
import { BASE_URL } from "../utils/constants";

interface IProductsQueryParams {
    [key: string]: string | number | boolean | undefined;
}

const stringifyParams = (params: IProductsQueryParams): Record<string, string> => {
    const stringifiedParams: Record<string, string> = {};
    for (const key in params) {
        if (params[key] !== undefined) {
            stringifiedParams[key] = String(params[key]);
        }
    }
    return stringifiedParams;
};

export const productApi = createApi({
    reducerPath: "productAPI",
    baseQuery: fetchBaseQuery({
        baseUrl: BASE_URL,
    }),
    tagTypes: ["Product", "Products"],
    endpoints: (build) => ({
        getProduct: build.query<IProduct, string>({
            query: (id) => `products/${id}`,
            transformResponse: (response: IProduct) => ({
                ...response,
                purch: Math.floor(Math.random() * 100) + 1
            }),
            providesTags: (_result, _error, id) => [{ type: 'Product', id }],
        }),

        getProducts: build.query<IProduct[], IProductsQueryParams>({
            query: (params) => buildUrl("/products", stringifyParams(params)),
            providesTags: (result) => 
                result 
                    ? [...result.map(({ id }) => ({ type: 'Products', id } as const)), { type: 'Products' }]
                    : [{ type: 'Products' }],
        }),
    }),
});

export const { useGetProductQuery, useGetProductsQuery } = productApi;
