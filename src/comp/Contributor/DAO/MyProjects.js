import { useQuery, useQueryClient } from '@tanstack/react-query';
import { getMyProjects } from '../../../actions/dao';
import Card from "./Card";

function MyProjects({ role }) {
  const queryClient = useQueryClient()
  const { isLoading, data } = useQuery({
    queryFn: getMyProjects,
    queryKey: ["my-projects"],
  })

  const refresh = () => {
    queryClient.invalidateQueries(["my-projects"])
  }

  return !isLoading && data.map(a => (
    <Card
      {...a}
      key={a._id}
      role={role}
      refresh={refresh}
      isClosed={new Date(a.closeTime).getTime() < new Date().getTime()}
      isMine
    />
  ))
}

export default MyProjects