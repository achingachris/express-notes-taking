import Client from '@/layout/client/Client'
import TopCards from '@/components/Client/home/TopCards'
import CargoList from '@/components/Client/home/CargoList'

const index = () => {
  return (
    <Client>
      <TopCards />
      <CargoList />
    </Client>
  )
}

export default index
