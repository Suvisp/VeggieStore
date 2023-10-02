import { ref, type Ref } from 'vue'
import { IProduct } from '../interfaces/productInterface'
import { IError } from '../interfaces/errorInterface'

const getProducts = () => {
    const products: Ref<IProduct[] | null> = ref(null)
    const error: Ref<IError | null> = ref(null)

    const load = async () => {
        try {
            let data = await fetch('http://localhost:3000/products')
            if (!data.ok) {
                throw Error('no data available')
            }
            products.value = await data.json()
        }
        catch (err: any) {
            error.value = err.message
            console.log(error.value)
        }
    }

    return { products, error, load }
}

export default getProducts