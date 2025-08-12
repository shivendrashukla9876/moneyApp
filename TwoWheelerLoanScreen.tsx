import { Filter, ArrowUpDown } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';

export default function TwoWheelerLoanScreen() {
  const twoWheelerOffers = [
    {
      bank: 'Bajaj Finserv',
      maxAmount: '₹2 Lacs',
      interestRate: '11.99%',
      processingFee: '₹ 999',
      emi: '₹ 2,456',
      logo: '🏦',
      specialOffer: 'Instant Approval'
    },
    {
      bank: 'HDFC Bank',
      maxAmount: '₹1.5 Lacs',
      interestRate: '12.25%',
      processingFee: '₹ 1,500',
      emi: '₹ 2,567',
      logo: '🏦'
    },
    {
      bank: 'ICICI Bank',
      maxAmount: '₹1.75 Lacs',
      interestRate: '12.45%',
      processingFee: '₹ 1,200',
      emi: '₹ 2,678',
      logo: '🏦'
    },
    {
      bank: 'IDFC First Bank',
      maxAmount: '₹2.5 Lacs',
      interestRate: '12.75%',
      processingFee: '₹ 2,000',
      emi: '₹ 2,789',
      logo: '🏦',
      specialOffer: 'No Down Payment'
    },
    {
      bank: 'Tata Capital',
      maxAmount: '₹1.25 Lacs',
      interestRate: '13.25%',
      processingFee: '₹ 800',
      emi: '₹ 2,890',
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
            <p className="text-lg text-black">₹ 1.2 Lacs</p>
          </div>
          <div>
            <p className="text-sm text-gray-600">Tenure</p>
            <p className="text-lg text-black">3 Years</p>
          </div>
        </div>
      </div>

      <div className="flex-1 overflow-auto pb-20">
        {/* Two Wheeler Loan Info */}
        <div className="bg-purple-50 p-4 m-4 rounded-lg">
          <h3 className="text-black mb-2">Two Wheeler Loan Benefits</h3>
          <ul className="text-sm text-gray-700 space-y-1">
            <li>• Finance up to 90% of vehicle cost</li>
            <li>• Quick approval within 24 hours</li>
            <li>• Minimal documentation required</li>
            <li>• Flexible tenure from 1 to 5 years</li>
            <li>• Special rates for salaried professionals</li>
          </ul>
        </div>

        {/* Loan Offers */}
        <div className="p-4 space-y-4">
          {twoWheelerOffers.map((offer, index) => (
            <Card key={index} className="bg-white">
              <CardContent className="p-4">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-gray-100 rounded flex items-center justify-center">
                      <span className="text-base">{offer.logo}</span>
                    </div>
                    <div>
                      <span className="text-sm text-black">{offer.bank}</span>
                      {offer.specialOffer && (
                        <Badge className="ml-2 bg-purple-100 text-purple-800 text-xs h-auto">
                          {offer.specialOffer}
                        </Badge>
                      )}
                    </div>
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