import { useQuery } from '@tanstack/react-query';
import { getProjects } from '../../../actions/dao';
import Card from "./Card";

function AllProjects({ role }) {
  const { isLoading, data } = useQuery({
    queryFn: getProjects,
    queryKey: ["projects"],
  })

  return !isLoading && data.map(a => <Card key={a._id} {...a} role={role} />)
}

export default AllProjects