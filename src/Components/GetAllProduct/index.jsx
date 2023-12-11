import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllProduct } from '../../Config/Store/Slices/productSlice';
import Loader from '../../Components/Loader';

function GetAllProduct() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getAllProduct());

        return () => {
            console.log('unMount');
        }
    }, []);

    const { product, error, loader } = useSelector(state => state.product);
    return (
        <div className='container-lg py-5'>
            {loader ? <Loader /> : null}
            <div className="row">
                {product?.length > 0 ?
                    product.map((item, index) => (
                        <div key={index} className="col-12 col-md-4 mb-3">
                            <div className="h-100 card border">
                                <img src={item.thumbnail} alt="thumbnail" className='img-fluid' />
                            </div>
                        </div>
                    ))
                    : []
                }
            </div>
        </div>
    );
};

export default GetAllProduct;