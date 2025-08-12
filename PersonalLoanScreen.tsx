import { Filter, ArrowUpDown } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';

export default function PersonalLoanScreen() {
  const loanOffers = [
    {
      bank: 'IDBI BANK',
      maxAmount: '₹190.25 Lacs',
      interestRate: '8.25%',
      processingFee: '₹ 5,000',
      emi: '₹ 13,797',
      logo: '🏦'
    },
    {
      bank: 'HDFC BANK',
      maxAmount: '₹85.25 Lacs',
      interestRate: '8.30%',
      processingFee: '₹ 3,000',
      emi: '₹ 13,856',
      logo: '🏦'
    },
    {
      bank: 'FEDERAL BANK',
      maxAmount: '₹188.65 Lacs',
      interestRate: '8.35%',
      processingFee: '₹ 10,000',
      emi: '₹ 13,915',
      logo: '🏦'
    },
    {
      bank: 'ICICI Bank',
      maxAmount: '₹112.71 Lacs',
      interestRate: '8.40%',
      processingFee: '₹ 3,000',
      emi: '₹ 13,973',
      logo: '🏦'
    },
    {
      bank: 'Citibank',
      maxAmount: '₹112.24 Lacs',
      interestRate: '8.45%',
      processingFee: '₹ 5,000',
      emi: '₹ 14,032',
      logo: '🏦'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header with paisabazaar branding */}
      <div className="bg-white px-4 py-3 border-b">
        <div className="flex items-center gap-2">
          <span className="text-blue-600 text-black">paisabazaar</span>
          <Badge className="bg-blue-600 text-white text-xs px-2 py-1 h-auto">
            HAR SAPNA HOGA SACH
          </Badge>
        </div>
      </div>

      {/* Loan Details */}
      <div className="bg-white px-4 py-4 border-b">
        <div className="flex justify-between items-center">
          <div>
            <p className="text-sm text-gray-600">Requested Loan Amount</p>
            <p className="text-lg text-black">₹ 17.5 Lacs</p>
          </div>
          <div>
            <p className="text-sm text-gray-600">Tenure</p>
            <p className="text-lg text-black">25 Years</p>
          </div>
        </div>
      </div>

      {/* Loan Offers */}
      <div className="flex-1 p-4 space-y-4 overflow-auto pb-20">
        {loanOffers.map((offer, index) => (
          <Card key={index} className="bg-white">
            <CardContent className="p-4">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-gray-100 rounded flex items-center justify-center">
                    <span className="text-base">{offer.logo}</span>
                  </div>
                  <span className="text-sm text-black">{offer.bank}</span>
                </div>
                <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded h-auto">
                  Apply
                </Button>
              </div>
              
              <div className="text-center mb-4">
                <p className="text-xl mb-1 text-black">{offer.maxAmount}</p>
                <p className="text-xs text-gray-600">Max. Loan Amount</p>
              </div>

              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <p className="text-sm text-black">{offer.interestRate}</p>
                  <p className="text-xs text-gray-600">Interest Rate</p>
                </div>
                <div>
                  <p className="text-sm text-black">{offer.processingFee}</p>
                  <p className="text-xs text-gray-600">Processing Fee</p>
                </div>
                <div>
                  <p className="text-sm text-black">{offer.emi}</p>
                  <p className="text-xs text-gray-600">EMI</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Bottom Action Bar */}
      <div className="fixed bottom-0 left-0 right-0 max-w-md mx-auto bg-blue-900 text-white p-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Filter className="w-5 h-5" />
            <span>Filters</span>
          </div>
          <div className="flex items-center gap-2">
            <ArrowUpDown className="w-5 h-5" />
            <span>Sort By</span>
          </div>
        </div>
      </div>
    </div>
  );
}