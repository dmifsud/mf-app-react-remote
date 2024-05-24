import useStore from '@mf-app/store/counter/store.counter';

const ClickTimes = () => {
  const { count } = useStore();
  return (
    <small>Global Counts: {count}</small>
  )
};

export default ClickTimes;