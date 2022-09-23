import { useEffect, useState } from 'react'
import { Title } from '../../Components/Title/Title'
import { ReactSpan } from '../../Components/ReactSpan/ReactSpan'
import { ReactButton } from '../../Components/ReactButton/ReactButton'
//
import { Soma } from '../../Controll/Controll'
import { ISearchUserProducts, searchUserProducts } from '../../Service/user'
import './Clientis.css'

export const Clientis = () => {
   const [clientButton, setClientButton] = useState<ISearchUserProducts[]>([])
   const [user, setUser] = useState<ISearchUserProducts>()

   const firstWord = (text: string): string => {
      const array = text.split(' ')
      return array[0]
   }

   const personChanger = (id_person: number) => {
      const data = clientButton.find(({ id }) => id_person === id)
      setUser(data)
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
         <Title text="Clientes" />
         <div className="box-flex client">
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
                                 className="box-flex client-item box-info"
                                 key={index}
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

         <ReactSpan content="aula - 2" />
      </>
   )
}
