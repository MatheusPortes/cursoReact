import { useEffect, useState, useRef } from 'react'
import {
   MdKeyboardArrowLeft,
   MdOutlineKeyboardArrowRight,
} from 'react-icons/md'
//
import { Title } from '../../Components/Title/Title'
import { ReactSpan } from '../../Components/ReactSpan/ReactSpan'
import { ReactButton } from '../../Components/ReactButton/ReactButton'
//
import { Soma } from '../../Controll/Controll'
import { useRangeCarrossel } from '../../ReactContext/ContextGlobal'
import { ISearchUserProducts, searchUserProducts } from '../../Service/user'
//
import './Clients.css'

export const Clientis = () => {
   const [clientButton, setClientButton] = useState<ISearchUserProducts[]>([])
   const [user, setUser] = useState<ISearchUserProducts>()

   const { range, setRange } = useRangeCarrossel()

   let number_mirror = clientButton.map((value, index) => index)

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
      if (range[range.length - 1] < number_mirror.length - 1) {
         setRange(range.map((value) => value + 1))
      } else {
         let oux = range.map((value) => value + 1)
         oux.splice(range.length - 1, 1)
         oux.unshift(0)
         setRange(oux)
      }
   }

   const prevSlide = () => {
      if (range[0] - 1 >= 0) {
         setRange(range.map((value) => value - 1))
      } else {
         let oux = range.map((value) => value - 1)
         oux.splice(0, 1)
         oux.push(number_mirror[number_mirror.length - 1])
         setRange(oux)
      }
   }

   useEffect(() => {
      const run = async () => {
         const data = await searchUserProducts()
         setClientButton(data)
         setUser({ ...data[0] })
      }
      run()
   }, [])

   return (
      <>
         <Title text="Clientes" type='h1'/>

         <div className="clients">
            <div className="clients-header">
               <nav className="clients-nav slider" ref={slider}>
                  <MdKeyboardArrowLeft
                     className="left-arrow"
                     onClick={prevSlide}
                  />
                  {clientButton.map(({ person, id }, index) => {
                     return (
                        <div
                           className={
                              range.includes(index)
                                 ? 'clientes-button slide active'
                                 : 'clientes-button slide'
                           }
                           key={id}
                        >
                           {range.includes(index) && (
                              <ReactButton
                                 title={`${firstWord(person.name)}`}
                                 eventOnclick={() => {
                                    personChanger(id)
                                 }}
                              />
                           )}
                        </div>
                     )
                  })}
                  <MdOutlineKeyboardArrowRight
                     className="right-arrow"
                     onClick={nextSlide}
                  />
               </nav>
            </div>

            <div className="box-flex client-box-section">
               <aside className="col-4">
                  <h4 className="client-title">Informações de Gasto</h4>

                  {user &&
                     user.buy_products.map(({ products }, index) => (
                        <div
                           key={index}
                           className="box-flex box-info client-amount"
                        >
                           <p className="info-span">{products.name}:</p>
                           <p className="info">{products.price} R$</p>
                        </div>
                     ))}

                  {user?.buy_products && (
                     <div className="client-amount">
                        <p className="info-span box-info">
                           Gasta Total: {Soma(user?.buy_products)} R$
                        </p>

                        {Soma(user?.buy_products) > 7000 && (
                           <p className="info box-info error font-mid">
                              Esta gastando muito
                           </p>
                        )}
                     </div>
                  )}
               </aside>

               {user && user.person && (
                  <section className="continuity-col-3">
                     <h4 className="client-title">Informações do Cliente</h4>
                     <div className="box-info-background">
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
                           <span className="info-span font-mid">E-mail:</span>
                           <p className="info-text">{user.email}</p>
                        </div>

                        <div className="box-flex">
                           <span className="info-span font-mid">
                              Status da Conta:
                           </span>
                           <p className="info-text success font-mid">
                              {user.is_status ? 'Ativo' : 'Inativo'}
                           </p>
                        </div>
                     </div>
                  </section>
               )}
            </div>
         </div>

         <ReactSpan content="aula - 2" />
      </>
   )
}
