import { Container, Filters, ProductsGroupList, Title, TopBar } from '@/components/shared'


export default function Home() {
  return (
    <>
      <Container className='mt-10'>
        <Title text='Все пиццы' size='lg' className='font-extrabold' />
      </Container>
      <TopBar />
      <Container className='mt-10 pb-14'>
        <div className='flex gap-[80px]'>
          {/* Фильтрация */}
          <div className='w-[250px]'>
            <Filters />
          </div>

          {/* Список товаров */}
          <div className='flex-1'>
            <div className='flex flex-col gap-16'>
              <ProductsGroupList
                title='Пиццы'
                items={[
                  {
                    id: 1,
                    name: 'Мясная пицца',
                    imageUrl:
                      'https://media.dodostatic.net/image/r:233x233/11EE7D6108E3A1C9952CD3A7F39A4D02.avif',
                    price: 550,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 2,
                    name: 'Мясная пицца',
                    imageUrl:
                      'https://media.dodostatic.net/image/r:233x233/11EE7D6108E3A1C9952CD3A7F39A4D02.avif',
                    price: 550,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 3,
                    name: 'Мясная пицца',
                    imageUrl:
                      'https://media.dodostatic.net/image/r:233x233/11EE7D6108E3A1C9952CD3A7F39A4D02.avif',
                    price: 550,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 4,
                    name: 'Мясная пицца',
                    imageUrl:
                      'https://media.dodostatic.net/image/r:233x233/11EE7D6108E3A1C9952CD3A7F39A4D02.avif',
                    price: 550,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 5,
                    name: 'Мясная пицца',
                    imageUrl:
                      'https://media.dodostatic.net/image/r:233x233/11EE7D6108E3A1C9952CD3A7F39A4D02.avif',
                    price: 550,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 6,
                    name: 'Мясная пицца',
                    imageUrl:
                      'https://media.dodostatic.net/image/r:233x233/11EE7D6108E3A1C9952CD3A7F39A4D02.avif',
                    price: 550,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 7,
                    name: 'Мясная пицца',
                    imageUrl:
                      'https://media.dodostatic.net/image/r:233x233/11EE7D6108E3A1C9952CD3A7F39A4D02.avif',
                    price: 550,
                    items: [{ price: 550 }],
                  },
                ]}
                categoryId={1}
              />
              <ProductsGroupList
                title='Комбо'
                items={[
                  {
                    id: 1,
                    name: 'Мясная пицца',
                    imageUrl:
                      'https://media.dodostatic.net/image/r:233x233/11EE7D6108E3A1C9952CD3A7F39A4D02.avif',
                    price: 550,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 2,
                    name: 'Мясная пицца',
                    imageUrl:
                      'https://media.dodostatic.net/image/r:233x233/11EE7D6108E3A1C9952CD3A7F39A4D02.avif',
                    price: 550,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 3,
                    name: 'Мясная пицца',
                    imageUrl:
                      'https://media.dodostatic.net/image/r:233x233/11EE7D6108E3A1C9952CD3A7F39A4D02.avif',
                    price: 550,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 4,
                    name: 'Мясная пицца',
                    imageUrl:
                      'https://media.dodostatic.net/image/r:233x233/11EE7D6108E3A1C9952CD3A7F39A4D02.avif',
                    price: 550,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 5,
                    name: 'Мясная пицца',
                    imageUrl:
                      'https://media.dodostatic.net/image/r:233x233/11EE7D6108E3A1C9952CD3A7F39A4D02.avif',
                    price: 550,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 6,
                    name: 'Мясная пицца',
                    imageUrl:
                      'https://media.dodostatic.net/image/r:233x233/11EE7D6108E3A1C9952CD3A7F39A4D02.avif',
                    price: 550,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 7,
                    name: 'Мясная пицца',
                    imageUrl:
                      'https://media.dodostatic.net/image/r:233x233/11EE7D6108E3A1C9952CD3A7F39A4D02.avif',
                    price: 550,
                    items: [{ price: 550 }],
                  },
                ]}
                categoryId={2}
              />
            </div>
          </div>
        </div>
      </Container>
    </>
  )
}
