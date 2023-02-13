import Admin from "@/layout/admin/Admin"
import SummaryCard from "@/components/Admin/HomePage/SummaryCard"
import OverView from "@/components/Admin/HomePage/OverView"
import CargoTable from "@/components/Admin/HomePage/CargoTable"

const index = () => {
  return (
    <Admin>
      <SummaryCard />
      <OverView />
      <CargoTable />
    </Admin>
  )
}

export default index
