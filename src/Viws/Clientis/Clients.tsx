import { useEffect, useState, useRef } from 'react'
import { Title } from '../../Components/Title/Title'
import { ReactSpan } from '../../Components/ReactSpan/ReactSpan'
import { ReactButton } from '../../Components/ReactButton/ReactButton'
//
import { Soma } from '../../Controll/Controll'
import { ISearchUserProducts, searchUserProducts } from '../../Service/user'
import {
   MdKeyboardArrowLeft,
   MdOutlineKeyboardArrowRight,
} from 'react-icons/md'
import './Clients.css'

export const Clientis = () => {
   const [clientButton, setClientButton] = useState<ISearchUserProducts[]>([])
   const [current, setCurrent] = useState(0)
   // const [range, setRange] =useState(3)
   const [A, setA] = useState([0, 1, 2, 3, 4, 5, 6, 7, 8, 9])
   const [B, setB] = useState([0, 1, 2, 3])
   const range = 3

   const [user, setUser] = useState<ISearchUserProducts>()

   const slider = useRef<HTMLInputElement>(null)

   const firstWord = (text: string): string => {
      const array = text.split(' ')
      return array[0]
   }

   const personChanger = (id_person: number) => {
      const data = clientButton.find(({ id }) => id_person === id)
      setUser(data)
   }

   const nextSlide = () => {

      if (B[B.length - 1] < A.length - 1) {
         setB(B.map((value) => value + 1))

      } else {
         let oux = B.map((value) => value + 1)
         oux.splice(B.length - 1, 1)
         oux.unshift(0)
         setB(oux)
      }

      setCurrent(current + range === clientButton.length - 1 ? 0 : current + 1)
      // setCurrent(current + range === clientButton.length - 1 ? 0 : current + 1)
   }
   const prevSlide = () => {
      // setCurrent(current - range <= 0 ? clientButton.length - 1 : current - 1)
   }

   useEffect(() => {
      const run = async () => {
         const data = await searchUserProducts()
         setClientButton(data)
         setUser({ ...data[0] })
      }
      run()
   }, [])
   // console.log('Array 1', A)
   // console.log('Array 2', B)
   console.log(A.filter( value => B.includes(value)))
   return (
      <>
         <Title text="Clientes" />
         <div className="clients">
            <div className="clients-header">
               <nav className="clients-nav slider" ref={slider}>
                  <MdKeyboardArrowLeft
                     className="left-arrow"
                     onClick={prevSlide}
                  />
                  {clientButton.map(({ person, id }, index) => (
                     <div
                        className={
                           'clientes-button image ' +
                           (index <= current + range && index >= current)
                              ? 'slide active'
                              : 'slide'
                        }
                        key={id}
                     >
                        {index <= current + range && index >= current && (
                           <ReactButton
                              title={`${firstWord(person.name)}`}
                              eventOnclick={() => {
                                 personChanger(id)
                              }}
                           />
                        )}
                     </div>
                  ))}
                  <MdOutlineKeyboardArrowRight
                     className="right-arrow"
                     onClick={nextSlide}
                  />
               </nav>
            </div>

            <div></div>
            <div></div>
         </div>
         <ReactSpan content="aula - 2" />
      </>
   )
}

{
   /* <div className="box-flex client">
   <div className="client-box-list">
      {clientButton.map(({ person, id }) => (
         <div className="clientes-button" key={id}>
            <ReactButton
               title={`${firstWord(person.name)}`}
               eventOnclick={() => {
                  personChanger(id)
               }}
            />
         </div>
      ))}
   </div>

   <div className="client-box">
      {user && user.person && (
         <>
            <h4 className="client-title">Informações do Cliente</h4>
            <div className="box-flex box-client-info">
               <div className="client-info">
                  <div className="box-flex box-info">
                     <span className="info-span font-mid">Nome:</span>
                     <p className="info-text">{user.person.name}</p>
                  </div>

                  <div className="box-flex box-info">
                     <span className="info-span font-mid">CPF:</span>
                     <p className="info-text">{user.person.cpf}</p>
                  </div>

                  <div className="box-flex box-info ">
                     <span className="info-span font-mid">Login:</span>
                     <p className="info-text">{user.login}</p>
                  </div>

                  <div className="box-flex box-info ">
                     <span className="info-span font-mid">
                        E-mail:
                     </span>
                     <p className="info-text">{user.email}</p>
                  </div>

                  <div className="box-flex client-title">
                     <span className="info-span font-mid">
                        Status da Conta:
                     </span>
                     <p className="info-text success font-mid">
                        {user.is_status ? 'Ativo' : 'Inativo'}
                     </p>
                  </div>
               </div>

               <div className="client-divider"></div>

               <div className="client-product">
                  {user.buy_products.map(({ products }, index) => (
                     <div
                        key={index}
                        className="box-flex client-item box-info"
                     >
                        <p className="box-info-text font-mid info-span">
                           {products.name}:
                        </p>
                        <p className="info">{products.price} R$</p>
                     </div>
                  ))}
               </div>
            </div>
         </>
      )}
   </div>

   <div className="client-product">
      <h4 className="client-title">Informações de Gasto</h4>
      {user &&
         user.buy_products.map(({ products }, index) => (
            <div
               key={index}
               className="box-flex client-item box-info client-amount"
            >
               <p className="box-info-text font-mid info-span">
                  {products.name}:
               </p>
               <p className="info">{products.price} R$</p>
            </div>
         ))}

      {user?.buy_products && (
         <div className="client-amount">
            <p className="info-span font-mid box-info">
               Gasta Total: {Soma(user?.buy_products)} R$
            </p>
            {Soma(user?.buy_products) > 7000 ? (
               <p className="warning info box-info error">
                  Esta gastando muito
               </p>
            ) : (
               <></>
            )}
         </div>
      )}
   </div>
</div> */
}
