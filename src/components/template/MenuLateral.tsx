import Image from 'next/image'
import useAuth from "../../data/hook/useAuth";
import { IconeAjustes, IconeCasa, IconeEmpenho, IconeNotaFiscal, IconeProtocolo, IconeSair } from "../icons";
import MenuItem from "./MenuItem";
import IconOM from '../icons/iconOM.png';

export default function MenuLateral() {
    const { logout } = useAuth()
    return (
        <aside className="flex flex-col
        bg-gray-200 text-gray-700
        dark:bg-gray-900">
            <div className={`
                flex flex-col 
                items-center justify-center
                h-16 w-20 
            `}>
                <Image src={IconOM} alt="Picture of the author" width="50" height="50" />
            </div>
            <ul className="flex-grow">
                <MenuItem url="/" texto="Início" icone={IconeCasa} />
                <MenuItem url="/empenhos" texto="Empenhos" icone={IconeEmpenho()} />
                <MenuItem url="/notas-fiscais" texto="Notas Fiscais" icone={IconeNotaFiscal()} />
                <MenuItem url="/protocolos" texto="Protocolo" icone={IconeProtocolo()} />
                <MenuItem url="/ajustes" texto="Minha conta" icone={IconeAjustes} />
            </ul >
            <ul className="">
                <MenuItem onCLick={logout}
                    texto="Sair"
                    icone={IconeSair}
                    className={`text-red-600 dark:text-red-400
                     hover:bg-red-400 hover:text-white 
                     dark:hover:text-white`} />
            </ul>
        </aside >
    )
}
