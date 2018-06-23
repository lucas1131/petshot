/* Resources */
import collar from '../resources/collar.jpg';
import food from '../resources/racao2.jpg';
import ball from '../resources/ball.png';

const ProductInfo = [
	
	{
		id: 0,
		type: 'product',
		image: food,
		desc: 'Nham nham, tem gosto de terra suja!',
		name: 'Raçam',
		price: 20.00
	},

	{
		id: 1,
		type: 'product',
		image: food,
		desc: 'Ração sabor maçã',
		name: 'Raçã',
		price: 30.00
	},

	{
		id: 2,
		type: 'product',
		desc: 'Bola quadrada',
		image: ball,
		name: 'Bolinha',
		price: 10.00
	},
	
	{
		id: 3,
		type: 'product',
		desc: 'Uma coleirinha dahora',
		image: collar,
		name: 'Coleira',
		price: 40.00
	},

	{
		id: 4,
		type: 'product',
		desc: 'Outra coleira topper',
		image: collar,
		name: 'Coleira',
		price: 30.00
	}
];

export default ProductInfo;