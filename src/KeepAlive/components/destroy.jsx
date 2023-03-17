import React, {
    useContext
} from 'react'
import keepaliveContext from '../core/keepContext'
export function useCacheDestroy() {
    return useContext(keepaliveContext).cacheDestory
}
