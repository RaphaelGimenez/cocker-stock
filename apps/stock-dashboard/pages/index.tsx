import { Button } from '@mantine/core';
import Link from 'next/link';

export function Index() {
  return (
    <div>
      <h1>Welcome to stock-dashboard!</h1>
      <Link href="/signup">
        <Button component="span">créer un compte</Button>
      </Link>
    </div>
  );
}

export default Index;
