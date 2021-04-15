import { PathExtension as TextpathExtension } from '../textpath/exts'
import { LineExtension as MarkerLineExtension } from '../marker/exts'
import { Path } from './path'

declare module './path' {
  interface Path
    extends MarkerLineExtension<SVGPathElement>,
      TextpathExtension<SVGPathElement> {}
}

Path.mixin(TextpathExtension, MarkerLineExtension)