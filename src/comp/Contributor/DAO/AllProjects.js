import { useQuery, useQueryClient } from '@tanstack/react-query';
import { getProjects } from '../../../actions/dao';
import useAuthStore from '../../../store/auth';
import Card from "./Card";

function AllProjects({ role }) {
  const currentUserId = useAuthStore(s => s.userDetails._id)
  const queryClient = useQueryClient()
  const { isLoading, data } = useQuery({
    queryFn: getProjects,
    queryKey: ["projects"],
  })

  const refresh = () => {
    queryClient.invalidateQueries(["projects"])
  }

  return !isLoading && data.projectList.map(a => (
    <Card
      {...a}
      key={a._id}
      role={role}
      refresh={refresh}
      isClosed={new Date(a.closeTime).getTime() < new Date().getTime()}
      isMine={a.userId === currentUserId}
    />
  ))
}

export default AllProjects