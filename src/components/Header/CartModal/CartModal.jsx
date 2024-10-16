import Swal from 'sweetalert2';
import './CartModal.css'
import { useCartContext } from '../../../context/CartContext.jsx';

export default function CartModal() {
  const {
    cart,
    emptyCart,
    removeItem,
    getTotalItemsInCart,
    addPurchasedImages,
  } = useCartContext();


  const handlePurchase = () => {
    // It iterates the cart and adds the images to the purchasedImages list
    cart.forEach(item => {
      addPurchasedImages(item);
      emptyCart();
      // Sweet Alert
      Swal.fire({
        title: "Bien hecho!",
        text: "Compra Exitosa!",
        icon: "success"
      });
    });
  }

  const handleRemoveItem = (id) => {
    removeItem(id);
    getTotalItemsInCart();
  }

  return <>

    <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="exampleModalLabel">Carrito</h1>
          </div>
          <div className="modal-body">
            {
              cart.length === 0 ?
                <p className='text-center'>
                  No hay productos en el carrito
                </p>
                :
                <table className="table">
                  <thead>
                    <tr>
                      <th scope="col">Name</th>
                      <th scope="col">Price</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cart.map((item) => (
                      <tr key={item.id}>
                        <td>{`Image ${item.id}`}</td>
                        <td>{item.price}</td>
                        <td >
                          <i className='bi bi-trash text-danger' onClick={() => handleRemoveItem(item.id)}></i>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>

            }
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-danger" data-bs-dismiss="modal">CANCEL</button>
            {
              cart.length === 0 ?
                <button type="button" className="btn btn-success disabled">PURCHASE</button>
                :
                <button type="button" className="btn btn-success" onClick={handlePurchase} data-bs-dismiss="modal" aria-label="Close">PURCHASE</button>
            }
          </div>
        </div>
      </div>
    </div>
  </>
}