// Header Section Data 

const productData = {
  "Women Clothing": [
    { id: 101, name: "Elegant Floral Dress", image: "banner2.jpg", price: 999 },
    { id: 102, name: "Classic Denim Jacket", image: "banner2.jpg", price: 1299 },
    { id: 103, name: "Casual Cotton Top", image: "banner2.jpg", price: 799 },
    { id: 104, name: "Summer Beach Hat", image: "banner2.jpg", price: 199 },
    { id: 105, name: "Trendy Skirt", image: "skirt.jpg", price: 899 },
    { id: 106, name: "Silk Saree", image: "saree.jpg", price: 1599 },
    { id: 107, name: "Woolen Sweater", image: "sweater.jpg", price: 1199 },
    { id: 108, name: "Designer Kurti", image: "kurti.jpg", price: 1099 }
  ],
  "Men Clothing": [
    { id: 201, name: "Polo T-Shirt", image: "polotshirt.webp", price: 1199 },
    { id: 202, name: "Denim Jeans", image: "denimjeans.jpg", price: 1499 },
    { id: 203, name: "Casual T-Shirt", image: "tshirt2.webp", price: 999 },
    { id: 204, name: "Formal Blazer", image: "tshirt3.webp", price: 1299 },
    { id: 205, name: "Hoodie", image: "tshirt4.webp", price: 1999 },
    { id: 206, name: "Sweatshirt", image: "sweatshirt.webp", price: 899 },
    { id: 207, name: "Cargo Pants", image: "cargopaint.jpg", price: 1099 },
    { id: 208, name: "Jacket", image: "jacket.webp", price: 799 }
  ],
  "Kids Clothing": [
    { id: 301, name: "Cartoon T-Shirt", image: "kids.jpg", price: 499 },
    { id: 302, name: "Mini Jeans", image: "kids2.jpg", price: 699 },
    { id: 303, name: "Kids Dress", image: "kids3.jpg", price: 899 },
    { id: 304, name: "Sweater", image: "kids4.jpg", price: 799 },
    { id: 305, name: "Party Frock", image: "kids5.jpg", price: 999 },
    { id: 306, name: "Printed Shorts", image: "kids6.jpg", price: 399 },
    { id: 307, name: "Hoodie", image: "kids7.jpg", price: 599 },
    { id: 308, name: "Dungaree", image: "kids8.jpg", price: 799 }
  ],
  "Footwear": [
    { id: 401, name: "Running Shoes", image: "shoes1.jpg", price: 1499 },
    { id: 402, name: "Casual Sneakers", image: "shoes2.jpg", price: 1199 },
    { id: 403, name: "Leather Formal Shoes", image: "shoes3.jpg", price: 1799 },
    { id: 404, name: "Sandals", image: "shoes4.jpg", price: 699 },
    { id: 405, name: "Flip Flops", image: "shoes5.jpg", price: 299 },
    { id: 406, name: "High Heels", image: "shoes6.jpg", price: 999 },
    { id: 407, name: "Loafers", image: "shoes7.jpg", price: 1299 },
    { id: 408, name: "Boots", image: "shoes8.jpg", price: 1599 }
  ],
  "Jewellery": [
    { id: 501, name: "Gold Necklace", image: "jewel1.jpg", price: 15999 },
    { id: 502, name: "Diamond Ring", image: "jewel2.jpg", price: 18999 },
    { id: 503, name: "Pearl Earrings", image: "jewel3.jpg", price: 2999 },
    { id: 504, name: "Silver Bangles", image: "jewel4.jpg", price: 1999 },
    { id: 505, name: "Kundan Set", image: "jewel5.jpg", price: 4999 },
    { id: 506, name: "Anklet", image: "jewel6.jpg", price: 999 },
    { id: 507, name: "Bracelet", image: "jewel7.jpg", price: 1499 },
    { id: 508, name: "Nose Ring", image: "jewel8.jpg", price: 799 }
  ],
  "Accessories & more": [
    { id: 601, name: "Sunglasses", image: "access1.jpg", price: 999 },
    { id: 602, name: "Leather Belt", image: "access2.jpg", price: 799 },
    { id: 603, name: "Wallet", image: "access3.jpg", price: 699 },
    { id: 604, name: "Handbag", image: "access4.jpg", price: 1299 },
    { id: 605, name: "Cap", image: "access5.jpg", price: 299 },
    { id: 606, name: "Watch Strap", image: "access6.jpg", price: 499 },
    { id: 607, name: "Tie", image: "access7.jpg", price: 399 },
    { id: 608, name: "Hair Clip", image: "access8.jpg", price: 199 }
  ],
  "Beauty Wellness": [
    { id: 701, name: "Lipstick", image: "makeup1.jpg", price: 299 },
    { id: 702, name: "Foundation", image: "makeup2.jpg", price: 699 },
    { id: 703, name: "Eyeliner", image: "makeup3.jpg", price: 199 },
    { id: 704, name: "Face Cream", image: "makeup4.jpg", price: 499 },
    { id: 705, name: "Hair Oil", image: "makeup5.jpg", price: 199 },
    { id: 706, name: "Shampoo", image: "makeup6.jpg", price: 399 },
    { id: 707, name: "Face Wash", image: "makeup7.jpg", price: 299 },
    { id: 708, name: "Nail Polish", image: "makeup8.jpg", price: 199 }
  ],
  "Mobile": [
    { id: 801, name: "iPhone 14", image: "mobile1.jpg", price: 69999 },
    { id: 802, name: "Samsung Galaxy S22", image: "mobile2.jpg", price: 59999 },
    { id: 803, name: "OnePlus 11", image: "mobile3.jpg", price: 49999 },
    { id: 804, name: "Redmi Note 12", image: "mobile4.jpg", price: 18999 },
    { id: 805, name: "Realme Narzo", image: "mobile5.jpg", price: 16999 },
    { id: 806, name: "POCO X5", image: "mobile6.jpg", price: 19999 },
    { id: 807, name: "iQOO Z7", image: "mobile7.jpg", price: 20999 },
    { id: 808, name: "Vivo T2", image: "mobile8.jpg", price: 17999 }
  ],
    "Sports": [
    { id: 901, name: "Cricket Bat", image: "sports1.jpg", price: 1199 },
    { id: 902, name: "Football", image: "sports2.jpg", price: 899 },
    { id: 903, name: "Badminton Racket", image: "sports3.jpg", price: 699 },
    { id: 904, name: "Yoga Mat", image: "sports4.jpg", price: 499 },
    { id: 905, name: "Running Shorts", image: "sports5.jpg", price: 599 },
    { id: 906, name: "Gym Gloves", image: "sports6.jpg", price: 399 },
    { id: 907, name: "Dumbbells Set", image: "sports7.jpg", price: 999 },
    { id: 908, name: "Skipping Rope", image: "sports8.jpg", price: 199 }
  ],
  "Home Decor": [
    { id: 1001, name: "Wall Painting", image: "decor1.jpg", price: 799 },
    { id: 1002, name: "Table Lamp", image: "decor2.jpg", price: 999 },
    { id: 1003, name: "Flower Vase", image: "decor3.jpg", price: 699 },
    { id: 1004, name: "Wall Clock", image: "decor4.jpg", price: 599 },
    { id: 1005, name: "Showpiece", image: "decor5.jpg", price: 499 },
    { id: 1006, name: "Photo Frame", image: "decor6.jpg", price: 299 },
    { id: 1007, name: "Candle Holder", image: "decor7.jpg", price: 199 },
    { id: 1008, name: "Curtains", image: "decor8.jpg", price: 899 }
  ],
  "Watches": [
    { id: 1101, name: "Digital Watch", image: "watch1.jpg", price: 1499 },
    { id: 1102, name: "Analog Watch", image: "watch2.jpg", price: 1299 },
    { id: 1103, name: "Smart Watch", image: "watch3.jpg", price: 2499 },
    { id: 1104, name: "Luxury Watch", image: "watch4.jpg", price: 4999 },
    { id: 1105, name: "Kids Watch", image: "watch5.jpg", price: 599 },
    { id: 1106, name: "Bracelet Watch", image: "watch6.jpg", price: 799 },
    { id: 1107, name: "Sport Watch", image: "watch7.jpg", price: 1699 },
    { id: 1108, name: "Casual Watch", image: "watch8.jpg", price: 999 }
  ],
  "Home Furnishing": [
    { id: 1201, name: "Bed Sheet", image: "furnish1.jpg", price: 1099 },
    { id: 1202, name: "Pillow Set", image: "furnish2.jpg", price: 599 },
    { id: 1203, name: "Blanket", image: "furnish3.jpg", price: 1299 },
    { id: 1204, name: "Doormat", image: "furnish4.jpg", price: 399 },
    { id: 1205, name: "Curtains", image: "furnish5.jpg", price: 999 },
    { id: 1206, name: "Mattress", image: "furnish6.jpg", price: 3499 },
    { id: 1207, name: "Table Cloth", image: "furnish7.jpg", price: 499 },
    { id: 1208, name: "Cushion Cover", image: "furnish8.jpg", price: 299 }
  ],
  "Toys": [
    { id: 1301, name: "Remote Car", image: "toys1.jpg", price: 899 },
    { id: 1302, name: "Soft Teddy", image: "toys2.jpg", price: 699 },
    { id: 1303, name: "Building Blocks", image: "toys3.jpg", price: 499 },
    { id: 1304, name: "Musical Toy", image: "toys4.jpg", price: 599 },
    { id: 1305, name: "Puzzle Set", image: "toys5.jpg", price: 299 },
    { id: 1306, name: "Doll House", image: "toys6.jpg", price: 999 },
    { id: 1307, name: "Coloring Kit", image: "toys7.jpg", price: 199 },
    { id: 1308, name: "Ball", image: "toys8.jpg", price: 199 }
  ],
  "Electronics": [
    { id: 1401, name: "Bluetooth Speaker", image: "electronics1.jpg", price: 1999 },
    { id: 1402, name: "Wireless Headphones", image: "electronics2.jpg", price: 2499 },
    { id: 1403, name: "Power Bank", image: "electronics3.jpg", price: 1099 },
    { id: 1404, name: "USB Cable", image: "electronics4.jpg", price: 199 },
    { id: 1405, name: "Keyboard", image: "electronics5.jpg", price: 899 },
    { id: 1406, name: "Mouse", image: "electronics6.jpg", price: 499 },
    { id: 1407, name: "LED Monitor", image: "electronics7.jpg", price: 6999 },
    { id: 1408, name: "Webcam", image: "electronics8.jpg", price: 1299 }
  ],
  "Kitchen Storage & Containers": [
    { id: 1501, name: "Spice Rack", image: "kitchen1.jpg", price: 799 },
    { id: 1502, name: "Storage Jars", image: "kitchen2.jpg", price: 499 },
    { id: 1503, name: "Tiffin Box", image: "kitchen3.jpg", price: 399 },
    { id: 1504, name: "Water Bottle", image: "kitchen4.jpg", price: 299 },
    { id: 1505, name: "Lunch Bag", image: "kitchen5.jpg", price: 699 },
    { id: 1506, name: "Glass Set", image: "kitchen6.jpg", price: 999 },
    { id: 1507, name: "Cutlery Holder", image: "kitchen7.jpg", price: 599 },
    { id: 1508, name: "Plastic Container Set", image: "kitchen8.jpg", price: 499 }
  ]

};




module.exports = productData;
