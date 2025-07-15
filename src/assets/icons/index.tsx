import React from 'react'

type IconName = keyof typeof Icons

interface IconProps extends React.SVGProps<SVGSVGElement> {
  name: IconName
}

const Icons = {
  lupaBusca: (props: React.SVGProps<SVGSVGElement>) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={0.5}
      stroke="#FFF"
      {...props}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
      />
    </svg>
  ),
  favorito: (props: React.SVGProps<SVGSVGElement>) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="#ffd700"
      {...props}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
      />
    </svg>
  ),
  favoritoSolido: (props: React.SVGProps<SVGSVGElement>) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="#ffd700"
      {...props}
    >
      <path
        fillRule="evenodd"
        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
        clipRule="evenodd"
      />
    </svg>
  ),
  trabalho: (props: React.SVGProps<SVGSVGElement>) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="#964B00"
      {...props}
    >
      <path
        fillRule="evenodd"
        d="M7.5 5.25a3 3 0 0 1 3-3h3a3 3 0 0 1 3 3v.205c.933.085 1.857.197 2.774.334 1.454.218 2.476 1.483 2.476 2.917v3.033c0 1.211-.734 2.352-1.936 2.752A24.726 24.726 0 0 1 12 15.75c-2.73 0-5.357-.442-7.814-1.259-1.202-.4-1.936-1.541-1.936-2.752V8.706c0-1.434 1.022-2.7 2.476-2.917A48.814 48.814 0 0 1 7.5 5.455V5.25Zm7.5 0v.09a49.488 49.488 0 0 0-6 0v-.09a1.5 1.5 0 0 1 1.5-1.5h3a1.5 1.5 0 0 1 1.5 1.5Zm-3 8.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z"
        clipRule="evenodd"
      />
      <path d="M3 18.4v-2.796a4.3 4.3 0 0 0 .713.31A26.226 26.226 0 0 0 12 17.25c2.892 0 5.68-.468 8.287-1.335.252-.084.49-.189.713-.311V18.4c0 1.452-1.047 2.728-2.523 2.923-2.12.282-4.282.427-6.477.427a49.19 49.19 0 0 1-6.477-.427C4.047 21.128 3 19.852 3 18.4Z" />
    </svg>
  ),
  familia: (props: React.SVGProps<SVGSVGElement>) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
      fill="#ff0000"
      {...props}
    >
      <path d="M2 6.342a3.375 3.375 0 0 1 6-2.088 3.375 3.375 0 0 1 5.997 2.26c-.063 2.134-1.618 3.76-2.955 4.784a14.437 14.437 0 0 1-2.676 1.61c-.02.01-.038.017-.05.022l-.014.006-.004.002h-.002a.75.75 0 0 1-.592.001h-.002l-.004-.003-.015-.006a5.528 5.528 0 0 1-.232-.107 14.395 14.395 0 0 1-2.535-1.557C3.564 10.22 1.999 8.558 1.999 6.38L2 6.342Z" />
    </svg>
  ),
  amigos: (props: React.SVGProps<SVGSVGElement>) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      fill="#fff"
      stroke="black"
      strokeWidth="0.5"
      {...props}
    >
      <path d="M 178 72 L 178 73 L 177 74 L 177 75 L 176 76 L 176 77 L 174 79 L 174 80 L 173 81 L 174 81 L 176 83 L 178 83 L 179 84 L 181 84 L 184 81 L 184 77 L 179 72 Z M 71 72 L 66 77 L 66 81 L 69 84 L 71 84 L 72 83 L 74 83 L 76 81 L 77 81 L 76 80 L 76 79 L 74 77 L 74 76 L 73 75 L 73 74 L 72 73 L 72 72 Z M 106 68 L 105 69 L 105 72 L 104 73 L 104 74 L 103 75 L 103 76 L 102 77 L 102 78 L 101 79 L 101 80 L 102 80 L 104 82 L 105 82 L 109 86 L 109 173 L 110 174 L 110 184 L 109 185 L 109 189 L 110 190 L 110 217 L 111 218 L 111 219 L 113 221 L 119 221 L 122 218 L 122 216 L 123 215 L 123 143 L 125 141 L 127 143 L 127 215 L 128 216 L 128 218 L 131 221 L 137 221 L 139 219 L 139 218 L 140 217 L 140 214 L 141 213 L 141 86 L 144 83 L 145 83 L 148 80 L 149 80 L 149 79 L 148 78 L 148 77 L 147 76 L 147 75 L 146 74 L 146 73 L 145 72 L 145 69 L 143 69 L 142 70 L 142 71 L 141 72 L 141 74 L 140 75 L 140 76 L 138 78 L 138 79 L 135 82 L 134 82 L 132 84 L 131 84 L 130 85 L 127 85 L 126 86 L 124 86 L 123 85 L 120 85 L 119 84 L 118 84 L 116 82 L 115 82 L 112 79 L 112 78 L 110 76 L 110 75 L 109 74 L 109 72 L 108 71 L 108 70 Z M 202 60 L 201 61 L 200 61 L 198 63 L 198 64 L 197 65 L 197 67 L 196 68 L 196 69 L 195 70 L 195 71 L 194 72 L 194 73 L 193 74 L 193 75 L 191 77 L 191 78 L 189 80 L 189 81 L 183 87 L 182 87 L 181 88 L 179 88 L 178 87 L 176 87 L 175 86 L 174 86 L 172 84 L 168 84 L 167 85 L 164 85 L 163 86 L 161 86 L 160 85 L 157 85 L 156 84 L 155 84 L 154 83 L 153 83 L 152 82 L 151 82 L 148 85 L 147 85 L 146 86 L 146 217 L 148 219 L 148 220 L 149 220 L 150 221 L 155 221 L 158 218 L 158 217 L 159 216 L 159 143 L 161 141 L 162 142 L 163 142 L 164 143 L 164 217 L 165 218 L 165 219 L 167 221 L 173 221 L 176 218 L 176 216 L 177 215 L 177 108 L 179 106 L 180 106 L 181 105 L 182 105 L 184 103 L 185 103 L 186 102 L 187 102 L 189 100 L 190 100 L 192 98 L 193 98 L 194 97 L 194 96 L 196 94 L 196 93 L 197 92 L 197 91 L 198 90 L 198 89 L 199 88 L 199 87 L 200 86 L 200 85 L 201 84 L 201 83 L 202 82 L 202 81 L 203 80 L 203 79 L 204 78 L 204 77 L 205 76 L 205 75 L 206 74 L 206 73 L 207 72 L 207 71 L 208 70 L 208 64 L 207 63 L 207 62 L 206 62 L 204 60 Z M 46 60 L 44 62 L 43 62 L 43 63 L 42 64 L 42 70 L 43 71 L 43 72 L 44 73 L 44 74 L 45 75 L 45 76 L 46 77 L 46 78 L 47 79 L 47 80 L 48 81 L 48 82 L 49 83 L 49 84 L 50 85 L 50 86 L 51 87 L 51 88 L 53 90 L 53 91 L 54 92 L 54 94 L 56 96 L 56 97 L 57 97 L 60 100 L 61 100 L 63 102 L 64 102 L 65 103 L 66 103 L 68 105 L 69 105 L 70 106 L 71 106 L 73 108 L 73 214 L 74 215 L 74 217 L 75 218 L 75 219 L 77 221 L 83 221 L 85 219 L 85 218 L 86 217 L 86 144 L 89 141 L 91 143 L 91 216 L 92 217 L 92 218 L 95 221 L 100 221 L 101 220 L 102 220 L 102 219 L 104 217 L 104 90 L 105 89 L 104 88 L 104 86 L 103 85 L 102 85 L 99 82 L 98 82 L 97 83 L 96 83 L 95 84 L 94 84 L 93 85 L 90 85 L 89 86 L 88 86 L 87 85 L 83 85 L 82 84 L 78 84 L 76 86 L 75 86 L 74 87 L 72 87 L 71 88 L 69 88 L 68 87 L 67 87 L 61 81 L 61 80 L 59 78 L 59 77 L 58 76 L 58 75 L 57 74 L 57 73 L 55 71 L 55 70 L 54 69 L 54 68 L 53 67 L 53 65 L 52 64 L 52 63 L 50 61 L 49 61 L 48 60 Z M 161 47 L 160 48 L 157 48 L 156 49 L 155 49 L 151 53 L 151 54 L 150 55 L 150 56 L 149 57 L 149 58 L 148 59 L 148 70 L 149 71 L 149 73 L 150 74 L 150 75 L 155 80 L 156 80 L 157 81 L 160 81 L 161 82 L 163 82 L 164 81 L 167 81 L 169 79 L 170 79 L 172 77 L 172 76 L 174 74 L 174 72 L 175 71 L 175 69 L 176 68 L 176 61 L 175 60 L 175 58 L 174 57 L 174 56 L 173 55 L 173 54 L 171 52 L 171 51 L 170 50 L 169 50 L 167 48 L 164 48 L 163 47 Z M 124 47 L 123 48 L 120 48 L 118 50 L 117 50 L 114 53 L 114 54 L 113 55 L 113 56 L 112 57 L 112 59 L 111 60 L 111 69 L 112 70 L 112 72 L 113 73 L 113 74 L 114 75 L 114 76 L 118 80 L 119 80 L 120 81 L 123 81 L 124 82 L 126 82 L 127 81 L 130 81 L 131 80 L 132 80 L 136 76 L 136 75 L 137 74 L 137 73 L 138 72 L 138 70 L 139 69 L 139 60 L 138 59 L 138 57 L 137 56 L 137 55 L 136 54 L 136 53 L 133 50 L 132 50 L 130 48 L 127 48 L 126 47 Z M 88 47 L 87 48 L 83 48 L 80 51 L 79 51 L 79 52 L 77 54 L 77 55 L 76 56 L 76 57 L 75 58 L 75 60 L 74 61 L 74 68 L 75 69 L 75 71 L 76 72 L 76 74 L 78 76 L 78 77 L 80 79 L 81 79 L 83 81 L 86 81 L 87 82 L 90 82 L 91 81 L 93 81 L 94 80 L 95 80 L 100 75 L 100 74 L 101 73 L 101 71 L 102 70 L 102 66 L 103 65 L 103 64 L 102 63 L 102 59 L 101 58 L 101 57 L 100 56 L 100 55 L 99 54 L 99 53 L 95 49 L 94 49 L 93 48 L 91 48 L 90 47 Z" />
    </svg>
  ),
  todos: (props: React.SVGProps<SVGSVGElement>) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="0.8"
      stroke="#ffffff"
      {...props}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418"
      />
    </svg>
  ),
  editar: (props: React.SVGProps<SVGSVGElement>) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      {...props}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
      />
    </svg>
  ),
  remover: (props: React.SVGProps<SVGSVGElement>) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      {...props}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
      />
    </svg>
  ),
  persona: (props: React.SVGProps<SVGSVGElement>) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      {...props}
    >
      <path
        fillRule="evenodd"
        d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
        clipRule="evenodd"
      />
    </svg>
  ),
  salvar: (props: React.SVGProps<SVGSVGElement>) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      {...props}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4"
      />
    </svg>
  ),
  cancelar: (props: React.SVGProps<SVGSVGElement>) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6"
      fill="none"
      viewBox="0 0 24 22"
      stroke="currentColor"
      {...props}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
  )
}

export const Icon = ({ name, ...props }: IconProps) => {
  const ComponentsIcon = Icons[name]
  return <ComponentsIcon {...props} />
}
