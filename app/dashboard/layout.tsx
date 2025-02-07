import Header from '../components/Header';
import Menu from '../components/Menu';

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className='h-screen flex flex-col justify-between'>
      <Header />
      <div className='grow'>{children}</div>
      <Menu />
    </div>
  );
}
