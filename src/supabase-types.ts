export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      agent: {
        Row: {
          created_at: string
          id: number
          id_user: string | null
          nomAgent: string | null
          prenomAgent: string | null
        }
        Insert: {
          created_at?: string
          id?: number
          id_user?: string | null
          nomAgent?: string | null
          prenomAgent?: string | null
        }
        Update: {
          created_at?: string
          id?: number
          id_user?: string | null
          nomAgent?: string | null
          prenomAgent?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "public_Agent_id_user_fkey"
            columns: ["id_user"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      commune: {
        Row: {
          created_at: string
          id: number
          nomCommune: string | null
        }
        Insert: {
          created_at?: string
          id?: number
          nomCommune?: string | null
        }
        Update: {
          created_at?: string
          id?: number
          nomCommune?: string | null
        }
        Relationships: []
      }
      maisonSupa: {
        Row: {
          adresse: string | null
          created_at: string
          description: string | null
          id: number
          id_rue: number | null
          image: string | null
          nbrChambres: number | null
          nbrSDB: number | null
          nomMaison: string | null
          prix: number | null
          surface: string | null
        }
        Insert: {
          adresse?: string | null
          created_at?: string
          description?: string | null
          id?: number
          id_rue?: number | null
          image?: string | null
          nbrChambres?: number | null
          nbrSDB?: number | null
          nomMaison?: string | null
          prix?: number | null
          surface?: string | null
        }
        Update: {
          adresse?: string | null
          created_at?: string
          description?: string | null
          id?: number
          id_rue?: number | null
          image?: string | null
          nbrChambres?: number | null
          nbrSDB?: number | null
          nomMaison?: string | null
          prix?: number | null
          surface?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "public_MaisonSupa_id_rue_fkey"
            columns: ["id_rue"]
            isOneToOne: false
            referencedRelation: "rue"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "public_MaisonSupa_id_rue_fkey"
            columns: ["id_rue"]
            isOneToOne: false
            referencedRelation: "ruequartier"
            referencedColumns: ["id_rue"]
          }
        ]
      }
      quartier: {
        Row: {
          created_at: string
          id: number
          id_commune: number | null
          nomQuartier: string | null
        }
        Insert: {
          created_at?: string
          id?: number
          id_commune?: number | null
          nomQuartier?: string | null
        }
        Update: {
          created_at?: string
          id?: number
          id_commune?: number | null
          nomQuartier?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "public_quartier_id_commune_fkey"
            columns: ["id_commune"]
            isOneToOne: false
            referencedRelation: "commune"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "public_quartier_id_commune_fkey"
            columns: ["id_commune"]
            isOneToOne: false
            referencedRelation: "quartiercommune"
            referencedColumns: ["id"]
          }
        ]
      }
      rue: {
        Row: {
          created_at: string
          id: number
          id_quartier: number | null
          nomRue: string | null
        }
        Insert: {
          created_at?: string
          id?: number
          id_quartier?: number | null
          nomRue?: string | null
        }
        Update: {
          created_at?: string
          id?: number
          id_quartier?: number | null
          nomRue?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "public_rue_id_quartier_fkey"
            columns: ["id_quartier"]
            isOneToOne: false
            referencedRelation: "quartier"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "public_rue_id_quartier_fkey"
            columns: ["id_quartier"]
            isOneToOne: false
            referencedRelation: "quartiercommune"
            referencedColumns: ["id_quartier"]
          },
          {
            foreignKeyName: "public_rue_id_quartier_fkey"
            columns: ["id_quartier"]
            isOneToOne: false
            referencedRelation: "ruequartier"
            referencedColumns: ["id"]
          }
        ]
      }
    }
    Views: {
      quartiercommune: {
        Row: {
          id: number | null
          id_quartier: number | null
          nomCommune: string | null
          nomQuartier: string | null
        }
        Relationships: []
      }
      ruequartier: {
        Row: {
          id: number | null
          id_rue: number | null
          nomQuartier: string | null
          nomRue: string | null
        }
        Relationships: []
      }
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (Database["public"]["Tables"] & Database["public"]["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (Database["public"]["Tables"] &
      Database["public"]["Views"])
  ? (Database["public"]["Tables"] &
      Database["public"]["Views"])[PublicTableNameOrOptions] extends {
      Row: infer R
    }
    ? R
    : never
  : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof Database["public"]["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof Database["public"]["Tables"]
  ? Database["public"]["Tables"][PublicTableNameOrOptions] extends {
      Insert: infer I
    }
    ? I
    : never
  : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof Database["public"]["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof Database["public"]["Tables"]
  ? Database["public"]["Tables"][PublicTableNameOrOptions] extends {
      Update: infer U
    }
    ? U
    : never
  : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof Database["public"]["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof Database["public"]["Enums"]
  ? Database["public"]["Enums"][PublicEnumNameOrOptions]
  : never
