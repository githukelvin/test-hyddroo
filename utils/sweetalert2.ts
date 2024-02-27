import type { SweetAlertOptions } from "sweetalert2";
import Swal from "sweetalert2/dist/sweetalert2.js";
import "sweetalert2/src/sweetalert2.scss";
export const useSwal = () => {
  const swal = (options: SweetAlertOptions) => Swal.fire(options);
  swal.DismissReason = Swal.DismissReason;
  swal.close = Swal.close;
  return swal;
};
