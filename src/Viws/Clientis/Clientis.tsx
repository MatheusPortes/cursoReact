import { useEffect, useState } from 'react'
import { Title } from '../../Components/Title/Title'
import { ReactSpan } from '../../Components/ReactSpan/ReactSpan'
import { ReactButton } from '../../Components/ReactButton/ReactButton'
//
import { pessoa } from '../../Controll/Controll'
import { Soma } from '../../Controll/Controll'
import {
   IBuyProducts,
   ISearchUserProducts,
   searchUserProducts,
} from '../../Service/user'
import './Clientis.css'

export const Clientis = () => {
   const [pageClient, setPageClient] = useState(0)
   const [user, setUser] = useState<ISearchUserProducts[]>([])
   const [marked, setMarked] = useState(0)

   const result = Soma(pessoa[pageClient])

   const firstWord = (text: string): string => {
      const array = text.split(' ')
      return array[0]
   }

   useEffect(() => {
      const run = async () => {
         const data = await searchUserProducts()
         console.log(data)
         setUser(data)
      }
      run()
   }, [])

   return (
      <div>
         <Title text="Clientes" />

         <div className="Clientes-nav">
            {pessoa.map(({ cliente, id }) => (
               <div key={id}>
                  <ReactButton
                     title={cliente}
                     eventOnclick={() => {
                        setPageClient((prev) => (prev = id))
                     }}
                  />
               </div>
            ))}
         </div>

         <div className="Clientes-nav">
            {user.map(({ person, id, login }) => (
               <div key={id}>
                  <ReactButton
                     title={`${firstWord(person.name)}`}
                     eventOnclick={() => {
                        setPageClient((prev) => (prev = id))
                     }}
                  />
               </div>
            ))}
         </div>

         <div className="client-box">
            {user.length > 0 && (
               <div className="">
                  <div className="box-flex" style={{ flexDirection: 'column' }}>
                     <div
                        style={{
                           backgroundColor: '#0f8f19',
                           height: 50,
                           width: '100%',
                        }}
                     >
                        
                     </div>
                     <div className="box-flex">
                        <div
                           className="col-3"
                           style={{ backgroundColor: '#293870' }}
                        >
                           <div className="box-flex box-info col-1">
                     <span className="info-span font-mid">Nome:</span>
                     <p className="info-text">{user[marked].person.name}</p>
                  </div>
                  <div className="box-flex box-info col-1">
                     <span className="info-span font-mid">CPF:</span>
                     <p className="info-text">{user[marked].person.cpf}</p>
                  </div>
                  <div className="box-flex box-info col-1">
                     <span className="info-span font-mid">Login:</span>
                     <p className="info-text">{user[marked].login}</p>
                  </div>
                  <div className="box-flex box-info col-23">
                     <span className="info-span font-mid">
                        Status da Conta:
                     </span>
                     <p className="info-text success font-mid">
                        {user[marked].is_status ? 'Ativo' : 'Inativo'}
                     </p>
                  </div>
                  <div className="box-flex box-info col-1">
                     <span className="info-span font-mid">E-mail:</span>
                     <p className="info-text">{user[marked].email}</p>
                  </div>
                        </div>
                        <div
                           className="continuity-col-3"
                           style={{ backgroundColor: '#dd9900' }}
                        ></div>
                     </div>
                  </div>
                  {/* <div className="box-flex box-info col-1">
                     <span className="info-span font-mid">Nome:</span>
                     <p className="info-text">{user[marked].person.name}</p>
                  </div>
                  <div className="box-flex box-info col-1">
                     <span className="info-span font-mid">CPF:</span>
                     <p className="info-text">{user[marked].person.cpf}</p>
                  </div>
                  <div className="box-flex box-info col-1">
                     <span className="info-span font-mid">Login:</span>
                     <p className="info-text">{user[marked].login}</p>
                  </div>
                  <div className="box-flex box-info col-23">
                     <span className="info-span font-mid">
                        Status da Conta:
                     </span>
                     <p className="info-text success font-mid">
                        {user[marked].is_status ? 'Ativo' : 'Inativo'}
                     </p>
                  </div>
                  <div className="box-flex box-info col-1">
                     <span className="info-span font-mid">E-mail:</span>
                     <p className="info-text">{user[marked].email}</p>
                  </div> */}
               </div>
            )}
            {/* {user[marked].buy_products.map(({ products }, index) => (
               <div key={index}>
                  <p className="box-info-text">{products.name}</p>
                  <p>{products.price}</p>
               </div>
            ))} */}
         </div>

         <p>Cliente: {pessoa[pageClient].cliente}</p>
         <p>Idade: {pessoa[pageClient].idade}</p>
         <p>
            Situação:{' '}
            <span
               style={
                  pessoa[pageClient].status
                     ? { color: 'green' }
                     : { color: 'red' }
               }
            >
               {pessoa[pageClient].status ? 'Ativo' : 'Inativo'}
            </span>
         </p>
         <p>Compras: {result}</p>
         {result > 9999 && (
            <strong className="strong-block">Esta gastando muito</strong>
         )}
         <ReactSpan content="aula - 2" />
      </div>
   )
}
