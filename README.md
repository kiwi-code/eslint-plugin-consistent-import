# eslint-plugin-consistent-import

```
// FAIL
import Product from "../../ProductComponent"
import Booking from "../../BookingDuck"
import Product from '../../ProductComponent"
import Booking from '../../BookingDuck"


// PASS
import ProductComponent from "../../ProductComponent"
import BookingDuck from "../../BookingDuck"
import BookingDuck from '../../BookingDuck.js"
import BookingDuck from '../../BookingDuck.spec.js"
import {BookingDuck} from '../../BookingDuck"
import {Booking, BookingDuck} from '../../BookingDuck"
```
