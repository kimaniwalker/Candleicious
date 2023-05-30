"use client"
import Header from '@/components/Header';
import StyledComponentsRegistry from './lib/registry';
import styled from 'styled-components';
import { CartWrapper } from '../../utils/context/cart';
import Footer from '@/components/Footer';
import { AffiliateWrapper } from '../../utils/context/affiliate';
import { UserWrapper } from '../../utils/context/user';
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'



export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  // Create a client
  const queryClient = new QueryClient()
  return (
    <html>
      <body style={{ margin: 0 }}>
        <StyledComponentsRegistry>
          <QueryClientProvider client={queryClient}>
            <UserWrapper>
              <CartWrapper>
                <AffiliateWrapper>
                  <Header />
                  <Wrapper>
                    {children}
                  </Wrapper>
                  <Footer />
                </AffiliateWrapper>
              </CartWrapper>
            </UserWrapper>
            <ReactQueryDevtools initialIsOpen={false} />
          </QueryClientProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}

const Wrapper = styled.section`
  margin: 0 auto;
  max-width: 1280px;
`