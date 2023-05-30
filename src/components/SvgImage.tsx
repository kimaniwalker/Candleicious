import React from 'react'

type SvgProps = {
    height: number
    width: number
    fill: string
    stroke: string
}
export default function SvgImage({ height, width, fill, stroke }: SvgProps) {


    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" stroke={stroke} height={height} width={width} fill={fill}><defs></defs><path className="a" d="M23.11259,27.71429H8.88741A3.202,3.202,0,0,1,5.69865,24.803l-1.3048-14.3151a.32019.32019,0,0,1,.31887-.34926H27.28728a.32019.32019,0,0,1,.31887.34926L26.30135,24.803A3.202,3.202,0,0,1,23.11259,27.71429Z" /><path className="a" d="M10.34757,13.27534V10.3422a6.05648,6.05648,0,0,1,6.05648-6.05649h0a6.05648,6.05648,0,0,1,6.05648,6.05649v2.93314" /><line className="a" x1="12.00296" y1="17.76824" x2="20.80515" y2="17.76824" /><line className="a" x1="13.83262" y1="21.32867" x2="18.97548" y2="21.32867" /></svg>
    )
}
