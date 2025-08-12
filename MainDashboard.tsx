import { CreditCard, Home, Building, Car, Navigation, Banknote, TrendingUp, Shield, Calculator } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import type { LoanType } from '../App';

interface MainDashboardProps {
  onNavigate: (screen: LoanType) => void;
  userName: string;
}

export default function MainDashboard({ onNavigate, userName }: MainDashboardProps) {
  const loanProducts = [
    {
      id: 'personal',
      title: 'Personal Loan',
      icon: CreditCard,
      hasOffer: true,
      offerText: 'Best Offers',
      bgColor: 'bg-blue-50',
      iconColor: 'text-blue-600'
    },
    {
      id: 'home',
      title: 'Home Loan',
      icon: Home,
      hasOffer: false,
      bgColor: 'bg-red-50',
      iconColor: 'text-red-600'
    },
    {
      id: 'lap',
      title: 'Loan Against Property',
      icon: Building,
      hasOffer: true,
      offerText: 'Cashback Offer',
      bgColor: 'bg-yellow-50',
      iconColor: 'text-yellow-600'
    },
    {
      id: 'car',
      title: 'Car Loan',
      icon: Car,
      hasOffer: true,
      offerText: 'Cashback Offer',
      bgColor: 'bg-green-50',
      iconColor: 'text-green-600'
    },
    {
      id: 'two-wheeler',
      title: 'Two Wheeler Loan',
      icon: Navigation,
      hasOffer: false,
      bgColor: 'bg-purple-50',
      iconColor: 'text-purple-600'
    }
  ];

  const otherProducts = [
    {
      title: 'Transfer Home Loan',
      icon: TrendingUp,
      hasOffer: true,
      offerText: 'Earn Upto 13.25%',
      bgColor: 'bg-pink-50',
      iconColor: 'text-pink-600'
    },
    {
      title: 'Bonds',
      icon: Shield,
      hasOffer: true,
      offerText: 'New Launch',
      bgColor: 'bg-yellow-50',
      iconColor: 'text-yellow-600'
    },
    {
      title: 'Fixed Deposit',
      icon: Banknote,
      hasOffer: true,
      offerText: 'Earn Upto 8.25%',
      bgColor: 'bg-blue-50',
      iconColor: 'text-blue-600'
    },
    {
      title: 'Working Capital',
      icon: Calculator,
      hasOffer: true,
      offerText: 'Cashback Offer',
      bgColor: 'bg-green-50',
      iconColor: 'text-green-600'
    }
  ];

  return (
    <div className="p-4 space-y-6 overflow-auto">
      {/* Greeting */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-xl text-black">Hey {userName} 👋</h1>
          <p className="text-sm text-gray-600">Good to see you back again</p>
        </div>
        <div className="flex items-center gap-2">
          <Badge variant="secondary" className="bg-yellow-100 text-yellow-800 text-xs">
            💰 OFFERS
          </Badge>
          <div className="w-6 h-6 bg-gray-200 rounded-full"></div>
        </div>
      </div>

      {/* Pre-approved Banner */}
      <Card className="bg-gradient-to-r from-green-100 to-green-50 border-green-200 relative overflow-hidden">
        <CardContent className="p-4">
          <div className="absolute top-2 left-4">
            <Badge className="bg-yellow-400 text-black text-xs px-2 py-1 h-auto">
              PRE-APPROVED
            </Badge>
          </div>
          <div className="pt-8 flex justify-between items-center">
            <div>
              <h3 className="text-lg mb-2 text-black">Instant Cash up to ₹5 Lakhs!</h3>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Disbursal in Minutes</li>
                <li>• No Docs Required</li>
                <li>• Affordable EMIs</li>
              </ul>
              <Button className="mt-4 bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded h-auto">
                Apply Now →
              </Button>
            </div>
            <div className="text-6xl">💰</div>
          </div>
          <div className="absolute bottom-2 right-4 text-xs text-gray-600">
            MoneyView
          </div>
        </CardContent>
      </Card>

      {/* Popular Products */}
      <div>
        <h2 className="text-lg mb-4 text-black">POPULAR PRODUCTS</h2>
        <div className="grid grid-cols-2 gap-4">
          {loanProducts.map((product) => {
            const IconComponent = product.icon;
            return (
              <Card 
                key={product.id} 
                className="cursor-pointer hover:shadow-md transition-shadow relative"
                onClick={() => onNavigate(product.id as LoanType)}
              >
                {product.hasOffer && (
                  <Badge 
                    className="absolute -top-2 left-2 bg-green-500 text-white text-xs px-2 py-1 z-10 h-auto"
                  >
                    {product.offerText}
                  </Badge>
                )}
                <CardContent className="p-4 text-center">
                  <div className={`w-12 h-12 ${product.bgColor} rounded-lg flex items-center justify-center mx-auto mb-3`}>
                    <IconComponent className={`w-6 h-6 ${product.iconColor}`} />
                  </div>
                  <h3 className="text-sm text-black">{product.title}</h3>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>

      {/* Other Products */}
      <div className="grid grid-cols-2 gap-4">
        {otherProducts.map((product, index) => {
          const IconComponent = product.icon;
          return (
            <Card key={index} className="cursor-pointer hover:shadow-md transition-shadow relative">
              {product.hasOffer && (
                <Badge 
                  className="absolute -top-2 left-2 bg-green-500 text-white text-xs px-2 py-1 z-10 h-auto"
                >
                  {product.offerText}
                </Badge>
              )}
              <CardContent className="p-4 text-center">
                <div className={`w-12 h-12 ${product.bgColor} rounded-lg flex items-center justify-center mx-auto mb-3`}>
                  <IconComponent className={`w-6 h-6 ${product.iconColor}`} />
                </div>
                <h3 className="text-sm text-black">{product.title}</h3>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
}