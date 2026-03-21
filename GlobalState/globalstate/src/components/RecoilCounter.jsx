import { RecoilRoot, atom, useRecoilState } from 'recoil';

const countState = atom({
  key: 'countState',
  default: 0,
});

const RecoilCounter = () => {
  const [count, setCount] = useRecoilState(countState);

  return (
    <div style={{ border: '1px solid green', padding: '10px', margin: '10px' }}>
      <h3>Recoil</h3>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <button onClick={() => setCount(count - 1)}>Decrease</button>
    </div>
  );
};

const RecoilApp = () => (
  <RecoilRoot>
    <RecoilCounter />
  </RecoilRoot>
);

export default RecoilApp;
