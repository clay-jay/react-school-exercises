import React from "react"
import Header from "../components/header"
import TemplateFive from "../components/template5"
import TemplateSix from "../components/template6"
import Julen from "../images/julen.jpg"
import Tiramisu from "../images/tiramisu.jpg"
import Plov from '../images/plov.jpg'

export default function Combination2() {
  return (
    <React.Fragment>
      <Header siteTitle="Combination v2" />
      <TemplateFive />
      <div style={{display: 'flex',  justifyContent:'space-around', alignItems:'center', height: '100vh'}}>
        <TemplateSix
            cardImage={Julen}
            cardImageTitle="Жульен с зеленью на топе"
            cardTitle="Жульен"
            cardDescription="Жюльен — пришедший из французской кухни особый способ нарезки молодых овощей тонкой соломкой, обычно в летний сезон для супов и салатов."
        />
        
        <TemplateSix
            cardImage={Tiramisu}
            cardImageTitle="Тирамису классический"
            cardTitle="Тирамису"
            cardDescription="Тирамису — итальянский десерт, приготавливаемый на основе сыра маскарпоне. Также в состав входят савоярди — сухое пористое печенье, куриные яйца, сахар, кофе, алкоголь; сверху десерт украшается какао-порошком и тёртым шоколадом."
        />

        <TemplateSix
            cardImage={Plov}
            cardImageTitle="Классический плов"
            cardTitle="Плов"
            cardDescription="Плов — блюдо восточной кухни, основу которого составляет варёный рис. Отличительным свойством плова является его рассыпчатость, достигаемая соблюдением технологии приготовления риса."
        />
        
      </div>
    </React.Fragment>
  )
}
