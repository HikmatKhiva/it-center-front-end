import { Card, Group, Skeleton, Stack } from '@mantine/core'
const StatsCardSkeleton = () => {
  return (
    <Card w="250" h={150} shadow="lg" padding="xl" radius="lg" className="m-5">
        <Stack justify="space-between">
          <Group align="center" justify="space-between">
            <Skeleton w={65} height={15} />
            <Skeleton w={40} height={40} />
          </Group>
          <Skeleton w={40} height={10} />
        </Stack>
      </Card>
  )
}
export default StatsCardSkeleton