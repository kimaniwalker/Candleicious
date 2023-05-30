'use client';
import React from 'react';
import ProductShelf from '@/components/ProductShelf';
import { useSearchParams } from 'next/navigation';
import { useAffiliateContext } from '../../utils/context/affiliate';
import { useQuery } from 'react-query';
import { fetchUserData } from '../../utils/fetchers/fetch';



export default function Page() {
  const { setAffiliateCode } = useAffiliateContext()
  const params = useSearchParams()
  const query = params.get('affiliateCode')
  console.log(query)

  const getAffiliateCode = () => {
    if (query) {
      setAffiliateCode(query)
    }
  }

  React.useEffect(() => {
    getAffiliateCode()
  }, [])

  return (

    <div className="space-y-4">
      <ProductShelf />
    </div>

  );
}