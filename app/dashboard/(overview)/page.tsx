// Hapus import { Card } dan fetchCardData karena sudah tidak dipakai di page level
import { lusitana } from '@/app/ui/fonts';
import { Suspense } from 'react';
import RevenueChart from '@/app/ui/dashboard/revenue-chart';
import LatestInvoices from '@/app/ui/dashboard/latest-invoices'; // <--- Tambahan PENTING
import CardWrapper from '@/app/ui/dashboard/cards';
import { 
  RevenueChartSkeleton,
  LatestInvoicesSkeleton,
  CardsSkeleton,
} from '@/app/ui/skeletons';
 
export default async function Page() {
  // Hapus semua await fetch... di sini karena data diambil di dalam komponen masing-masing
  
  return (
    <main>
      <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
        Dashboard
      </h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {/* Gunakan Suspense + CardWrapper saja */}
        <Suspense fallback={<CardsSkeleton />}>
          <CardWrapper />
        </Suspense>
        {/* Hapus 4 komponen <Card ... /> manual di sini */}
      </div>
      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
        <Suspense fallback={<RevenueChartSkeleton />}>
          <RevenueChart />
        </Suspense>
        
        <Suspense fallback={<LatestInvoicesSkeleton />}>
          <LatestInvoices />
        </Suspense>
        {/* Hapus <LatestInvoices latestInvoices={latestInvoices} /> yang lama */}
      </div>
    </main>
  );
}