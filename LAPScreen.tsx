import { Filter, ArrowUpDown } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';

export default function LAPScreen() {
  const lapOffers = [
    {
      bank: 'HDFC Bank',
      maxAmount: '₹5 Cr',
      interestRate: '9.25%',
      processingFee: '₹ 10,000',
      emi: '₹ 18,456',
      logo: '🏦',
      specialOffer: 'Lowest Rate'
    },
    {
      bank: 'ICICI Bank',
      maxAmount: '₹3.5 Cr',
      interestRate: '9.45%',
      processingFee: '₹ 8,000',
      emi: '₹ 18,678',
      logo: '🏦'
    },
    {
      bank: 'Bajaj Finserv',
      maxAmount: '₹2.5 Cr',
      interestRate: '9.55%',
      processingFee: '₹ 5,000',
      emi: '₹ 18,890',
      logo: '🏦',
      specialOffer: 'Quick Disbursal'
    },
    {
      bank: 'IDFC First Bank',
      maxAmount: '₹4 Cr',
      interestRate: '9.65%',
      processingFee: '₹ 12,000',
      emi: '₹ 19,102',
      logo: '🏦'
    },
    {
      bank: 'Axis Bank',
      maxAmount: '₹3 Cr',
      interestRate: '9.75%',
      processingFee: '₹ 7,500',
      emi: '₹ 19,314',
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
            <p className="text-lg text-black">₹ 75 Lacs</p>
          </div>
          <div>
            <p className="text-sm text-gray-600">Tenure</p>
            <p className="text-lg text-black">15 Years</p>
          </div>
        </div>
      </div>

      <div className="flex-1 overflow-auto pb-20">
        {/* LAP Info */}
        <div className="bg-orange-50 p-4 m-4 rounded-lg">
          <h3 className="text-black mb-2">Loan Against Property Benefits</h3>
          <ul className="text-sm text-gray-700 space-y-1">
            <li>• Lower interest rates compared to personal loans</li>
            <li>• Higher loan amounts up to 70% of property value</li>
            <li>• Flexible tenure up to 20 years</li>
            <li>• Use funds for any business or personal purpose</li>
            <li>• Tax benefits on interest paid for business use</li>
          </ul>
        </div>

        {/* Loan Offers */}
        <div className="p-4 space-y-4">
          {lapOffers.map((offer, index) => (
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
                        <Badge className="ml-2 bg-orange-100 text-orange-800 text-xs h-auto">
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