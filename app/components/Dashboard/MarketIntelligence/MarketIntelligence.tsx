import IntelligenceListItem from './IntelligenceListItem'

const MarketIntelligence = () => {
  const intelligenceItems = [
    {
      id: 0,
      color: 'red',
      text: 'Rate hardening in Cyber market - +15% YoY',
    },
    {
      id: 1,
      color: 'yellow',
      text: 'New capacity entering Marine market',
    },
    {
      id: 2,
      color: 'blue',
      text: 'Environmental regulatory changes in CA',
    },
  ]  as const;


  return (
    <div className="p-5">
      <h2 className="text-xl pb-2">
        Market intelligence 
      </h2>

      <div> 
        {intelligenceItems.map(item => {
          return <IntelligenceListItem key={item.id} color={item.color} text={item.text}/>
        })}
      </div>

    </div>
  )
}

export default MarketIntelligence