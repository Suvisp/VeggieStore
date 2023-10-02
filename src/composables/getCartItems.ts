import { ref, type Ref } from 'vue'
import { ICart } from '../interfaces/cartInterface';
import { IError } from '../interfaces/errorInterface';
import axios from "axios";

const getCartItems = () => {
    const cartItems: Ref<ICart[] | null> = ref(null)
    const error: Ref<IError | null> = ref(null)

    const load = async () => {
        try {
            let res = await axios({
                url: 'http://localhost:3000/cart',
                method: 'get',
                timeout: 8000,
                headers: { 'Content-Type': 'application-json'}
              })
              if (res.status == 200) {
                console.log(res.status)
              }
              cartItems.value = res.data
            }
            catch (err) {
              console.log(err)
            }
          }
    return { cartItems, error, load }
}

export default getCartItems