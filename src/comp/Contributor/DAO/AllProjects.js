import { useQuery, useQueryClient } from '@tanstack/react-query';
import { getProjects } from '../../../actions/dao';
import Card from "./Card";

function AllProjects({ role }) {
  const queryClient = useQueryClient()
  const { isLoading, data } = useQuery({
    queryFn: getProjects,
    queryKey: ["projects"],
  })

  const refresh = () => {
    queryClient.invalidateQueries(["projects"])
  }

  return !isLoading && data.map(a => <Card key={a._id} {...a} role={role} refresh={refresh} />)
}

export default AllProjects