let product={
    p_id:'P101',
    p_name: "vivo",
    price:15000,
    discount:true,
    stock:"Available",
    loc:['ban','hosakote','kalyan Nagara']
   }
   console.log(product.price)
  for(prop in product) {
    console.log(product[prop])
  }
