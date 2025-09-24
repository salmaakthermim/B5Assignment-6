import { Package } from 'lucide-react'
import { NavLink } from 'react-router'

const Logo = () => {
    return (
        <NavLink to="/" className="flex items-center gap-1.5">
            {() => (
                <>
                    <div className="bg-background p-2 rounded-lg">
                        <Package className="w-8 h-8 text-foreground" />
                    </div>
                    <div>
                        <h1 className="text-xl font-bold text-foreground">DeliveryPro</h1>
                        <p className="text-sm ">Fast & Secure</p>
                    </div>
                </>
            )}
        </NavLink>
    )
}
export default Logo