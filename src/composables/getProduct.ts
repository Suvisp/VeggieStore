import { ref, type Ref } from 'vue'
import { IProduct } from '../interfaces/productInterface'
import { IError } from '../interfaces/errorInterface'

const getProduct = (id: number) => {
    const product: Ref<IProduct | null> = ref(null)
    const error: Ref<IError | null> = ref(null)

    const load = async () => {
        try {
            let data = await fetch('http://localhost:3000/products/' + id)
            if (!data.ok) {
                throw Error('that product does not exist')
            }
            product.value = await data.json()
        }
        catch (err: any) {
            error.value = err.message
            console.log(error.value)
        }
    }

    return { product, error, load }
}

export default getProduct